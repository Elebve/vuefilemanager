<?php
namespace App\Providers;

use DB;
use App\Users\Models\User;
use Domain\Files\Models\File;
use Domain\Sharing\Models\Share;
use Domain\Folders\Models\Folder;
use Illuminate\Support\Facades\Gate;
use Domain\Sharing\Actions\ProtectShareRecordAction;
use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;

class AuthServiceProvider extends ServiceProvider
{
    /**
     * The policy mappings for the application.
     *
     * @var array
     */
    protected $policies = [
        // 'App\Model' => 'App\Policies\ModelPolicy',
    ];

    /**
     * Register any authentication / authorization services.
     *
     * @return void
     */
    public function boot()
    {
        $this->registerPolicies();

        // Define admin maintenance gate
        Gate::define('maintenance', fn ($user) => $user->role === 'admin');

        // Define user ability
        collect(['can-edit', 'can-visit'])
            ->each(function ($ability) {
                Gate::define($ability, function (?User $user, File | Folder $item, ?Share $share) use ($ability) {
                    // If share link exist, then check share access
                    if ($share) {
                        return $this->share_guard($share, $item);
                    }

                    // Check user owner status
                    if ($user?->id === $item->user_id) {
                        return true;
                    }

                    // Check team member ability to access into requested item
                    return $this->team_member_guard($item, $user, $ability);
                });
            });
    }

    private function share_guard(Share $share, Folder | File $item): bool
    {
        $isOwner = $share->user_id === $item->user_id;

        if (! $share->is_protected && $isOwner) {
            return true;
        }

        if (! request()->hasCookie('share_session')) {
            return false;
        }

        // Get shared session
        $share_session = json_decode(
            request()->cookie('share_session')
        );

        // Check if is requested same share record
        if ($share_session->token !== $share->token) {
            return false;
        }

        // Check if share record was previously authenticated
        if (! $share_session->authenticated) {
            return false;
        }

        return $isOwner;
    }

    private function team_member_guard(Folder | File $item, ?User $user, $ability): bool
    {
        $membership = DB::table('team_folder_members')
            ->where('parent_id', $item->getLatestParent()->id)
            ->where('user_id', $user->id)
            ->first();

        return $membership?->permission === $ability;
    }
}
