<?php

namespace Database\Seeders;

use App\Models\Like;
use App\Models\Question;
use App\Models\User;
use Illuminate\Database\Seeder;

class LikeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $users = User::all();
        $questions = Question::all();

        $questions->each(function ($question) use ($users) {
            $likeCount = rand(0, floor($users->count() / 2));

            $randUsers = $users->random($likeCount);

            $randUsers->each(function ($user) use ($question) {
                Like::factory()
                    ->create([
                        'question_id' => $question->id,
                        'user_id' => $user->id,
                    ]);
            });
        });
    }
}
