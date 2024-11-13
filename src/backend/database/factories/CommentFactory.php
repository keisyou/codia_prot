<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Comment>
 */
class CommentFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'content' => fake()->realText(rand(100, 1000)),
            'created_at' => $created_at = fake()->dateTimeBetween('-3 months', 'now'),
            'updated_at' => fake()->dateTimeBetween($created_at, 'now'),
        ];
    }
}
