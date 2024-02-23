<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\LocationController;
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
Route::middleware('api')->get('/bvc',[LocationController::class,"getLocations"]);