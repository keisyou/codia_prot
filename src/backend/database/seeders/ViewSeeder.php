<?php

namespace Database\Seeders;

use App\Models\Question;
use App\Models\View;
use Illuminate\Database\Seeder;

class ViewSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $questions = Question::all();

        $questions->each(function ($question) {
            View::factory()
                ->count(rand(0, 100))
                ->create([
                    'question_id' => $question->id,
                ]);
        });
    }
}
