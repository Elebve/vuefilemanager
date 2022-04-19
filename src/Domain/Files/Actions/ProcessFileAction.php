<?php
namespace Domain\Files\Actions;

use Illuminate\Support\Str;
use Domain\Files\Models\File;
use Domain\Folders\Models\Folder;
use Illuminate\Support\Facades\Storage;
use Domain\Files\Requests\UploadRequest;
use Domain\Traffic\Actions\RecordUploadAction;

class ProcessFileAction
{
    public function __construct(
        public RecordUploadAction $recordUpload,
        public GetFileParentId $getFileParentId,
        public StoreFileExifMetadataAction $storeExifMetadata,
        public MoveFileToFTPStorageAction $moveFileToFTPStorage,
        public ProcessImageThumbnailAction $createImageThumbnail,
        public MoveFileToExternalStorageAction $moveFileToExternalStorage,
    ) {
    }

    /**
     * Upload new file
     */
    public function __invoke(
        UploadRequest $request,
        ?string $userId,
        string $chunkPath,
    ) {
        // Get local disk instance
        $localDisk = Storage::disk('local');

        // Get file data
        $size = $localDisk->size($chunkPath);
        $mimetype = $localDisk->mimeType($chunkPath);
        $name = Str::uuid() . '.' . $request->input('extension');

        // Get upload limit
        $uploadLimit = get_settings('upload_limit');

        // File size handling
        if ($uploadLimit && $size > format_bytes($uploadLimit)) {
            abort(413);
        }

        // Get user
        $user = $request->filled('parent_id')
            ? Folder::find($request->input('parent_id'))->getLatestParent()->user
            : auth()->user();

        // Check if user has enough space to upload file
        if (! $user->canUpload($size)) {
            // Delete file from chunk directory
            $localDisk->delete($chunkPath);

            // Set up response
            $response = response([
                'type'    => 'error',
                'message' => __t('user_action_not_allowed'),
            ], 401);

            // Abort code
            abort($response);
        }

        // Move file to user directory
        $localDisk->move($chunkPath, "files/$user->id/$name");

        // Create multiple image thumbnails
        ($this->createImageThumbnail)($name, $user->id);

        // Move file to external storage
        match (config('filesystems.default')) {
            's3' => ($this->moveFileToExternalStorage)($name, $user->id),
            'ftp', 'azure' => ($this->moveFileToFTPStorage)($name, $user->id),
            default => null
        };

        // Create new file
        $file = File::create([
            'mimetype'   => $request->input('extension'),
            'type'       => getFileType($mimetype),
            'parent_id'  => ($this->getFileParentId)($request, $user->id),
            'name'       => $request->input('name'),
            'basename'   => $name,
            'filesize'   => $size,
            'user_id'    => $user->id,
            'creator_id' => auth()->id(),
        ]);

        // Store file exif data
        ($this->storeExifMetadata)($file);

        // Return new file
        return $file;
    }
}
