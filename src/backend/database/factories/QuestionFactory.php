<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Question>
 */
class QuestionFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'title' => fake()->realText(rand(10, 100)),
            'content' => fake()->realText(rand(100, 5000)),
            'is_resolved' => fake()->boolean(50),
            'created_at' => $created_at = fake()->dateTimeBetween('-3 months', 'now'),
            'updated_at' => fake()->dateTimeBetween($created_at, 'now'),
        ];
    }
}
