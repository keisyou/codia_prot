<?php

namespace Database\Seeders;

use App\Models\Comment;
use App\Models\Question;
use App\Models\User;
use Illuminate\Database\Seeder;

class CommentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $users = User::all();
        $questions = Question::all();

        $questions->each(function ($question) use ($users) {
            Comment::factory()
                ->count(rand(0, 5))
                ->create([
                    'user_id' => $users->random()->id,
                    'question_id' => $question->id,
                ]);
        });
    }
}
