<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\LocationController;
use App\Http\Controllers\Level1CategoriesController;
use App\Http\Controllers\Level2CategoriesController;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/
// send data to front-end without controller 
Route::middleware('api')->get('/abc', function (Request $request) {
    return "ramu";
});
// send data to front-end with controller
Route::middleware('api')->get('/get-locations',[LocationController::class,"getLocations"]);
Route::middleware('api')->post('/add-locations',[LocationController::class,"addLocations"]);
Route::middleware('api')->get('/get-level1Categories',[Level1CategoriesController::class,"getlevel1Categories"]);
Route::middleware('api')->post('/add-level1categories',[Level1CategoriesController::class,"addlevel1Categories"]);
Route::middleware('api')->get('/get-level2Categories',[Level2CategoriesController::class,"getlevel2Categories"]);
Route::middleware('api')->post('/add-level2Categories',[Level2CategoriesController::class,"addLevel2Categories"]);
Route::middleware('api')->delete('/delete-level1Categories/{id}',[Level1CategoriesController::class,"deleteLevel1Categories"]);
Route::middleware('api')->delete('/delete-level2Categories/{id}',[Level2CategoriesController::class,"deleteLevel2Categories"]);
