<?php
namespace Domain\Browsing\Controllers;

use Domain\Files\Models\File;
use Domain\Sharing\Models\Share;
use Domain\Folders\Models\Folder;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Auth;

class BrowseSharedItemsController
{
    public function __invoke(): Collection
    {
        $user_id = Auth::id();

        // Get shared folders and files
        $folder_ids = Share::where('user_id', $user_id)
            ->where('type', 'folder')
            ->pluck('item_id');

        $file_ids = Share::where('user_id', $user_id)
            ->where('type', '!=', 'folder')
            ->pluck('item_id');

        // Get folders and files
        $folders = Folder::with(['parent', 'shared:token,id,item_id,permission,is_protected,expire_in'])
            ->where('user_id', $user_id)
            ->whereIn('id', $folder_ids)
            ->sortable()
            ->get();

        $files = File::with(['parent', 'shared:token,id,item_id,permission,is_protected,expire_in'])
            ->where('user_id', $user_id)
            ->whereIn('id', $file_ids)
            ->sortable()
            ->get();

        // Collect folders and files to single array
        return collect([$folders, $files])
            ->collapse();
    }
}