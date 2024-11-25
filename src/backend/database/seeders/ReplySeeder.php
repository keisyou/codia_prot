<?php

namespace Database\Seeders;

use App\Models\Comment;
use App\Models\Reply;
use App\Models\User;
use Illuminate\Database\Seeder;

class ReplySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $users = User::all();
        $comments = Comment::all();

        $comments->each(function ($comment) use ($users) {
            Reply::factory()
                ->count(rand(0, 5))
                ->create([
                    'user_id' => $users->random()->id,
                    'comment_id' => $comment->id,
                ]);
        });
    }
}
