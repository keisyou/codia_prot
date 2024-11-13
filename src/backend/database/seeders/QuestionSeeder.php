<?php

namespace Database\Seeders;

use App\Models\Category;
use App\Models\Question;
use App\Models\User;
use Illuminate\Database\Seeder;

class QuestionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $users = User::all();
        $categories = Category::all();

        $users->each(function ($user) use ($categories) {
            Question::factory()
                ->count(rand(0, 5))
                ->for($user)
                ->create()
                ->each(function ($question) use ($categories) {
                    $randCategories = $categories->random(rand(1, 3));
                    $question->categories()->attach($randCategories);
                });
        });
    }
}
