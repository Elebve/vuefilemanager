<?php
namespace App\Users\Controllers\Account;

use Illuminate\Http\JsonResponse;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Database\QueryException;
use App\Users\Requests\UpdateUserProfileSettingsRequest;

class UpdateProfileSettingsController extends Controller
{
    /**
     * Update user settings
     */
    public function __invoke(
        UpdateUserProfileSettingsRequest $request
    ): JsonResponse {
        $successMessage = [
            'type'    => 'success',
            'message' => "The {$request->input('name')} was successfully updated.",
        ];

        // Check if is demo
        if (is_demo_account()) {
            return response()->json($successMessage);
        }

        // Get user
        $user = Auth::user();

        // Update avatar
        if ($request->hasFile('avatar')) {
            $user
                ->settings()
                ->update([
                    'avatar' => store_avatar($request, 'avatar'),
                ]);

            return response()->json($successMessage);
        }

        // Try to store user option
        try {
            $user
                ->settings()
                ->update(make_single_input($request));
        } catch (QueryException $e) {
            return response()->json([
                'type'    => 'error',
                'message' => "You typed the invalid '{$request->input('name')}' name parameter.",
            ], 422);
        }

        return response()->json($successMessage);
    }
}
