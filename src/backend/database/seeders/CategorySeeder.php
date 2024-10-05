<?php

namespace Database\Seeders;

use App\Models\Category;
use Illuminate\Database\Seeder;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $categories = [
            'HTML',
            'CSS',
            'JavaScript',
            'TypeScript',
            'React',
            'Next.js',
            'PHP',
            'Laravel',
            'Ruby',
            'Ruby on Rails',
            'SQL',
            'Git',
        ];

        foreach ($categories as $category) {
            Category::create(['name' => $category]);
        }
    }
}
