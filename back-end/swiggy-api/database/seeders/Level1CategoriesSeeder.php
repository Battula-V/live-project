<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class Level1CategoriesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('level1_categories')->insert([
            [
                "level1CategoryName" => "veg",
                "status" =>  "active",
            ],
            [
                "level1CategoryName" => "Non-veg",
                "status" => "inactive"
            ]
        ]);
    }
}
