<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Controller;


    /*
    |--------------------------------------------------------------------------
    | Web Routes
    |--------------------------------------------------------------------------
    |
    | Here is where you can register web routes for your application. These
    | routes are loaded by the RouteServiceProvider within a group which
    | contains the "web" middleware group. Now create something great!
    |
    */

Route::get('/staffs', [Controller::class, 'getAllStaff']);
Route::post('/staffs', [Controller::class, 'insertAStaff']);

Route::get('/staff/{id}', [Controller::class, 'getName']);
Route::post('/staff/{id}/fired', [Controller::class, 'fireStaff']);
Route::post('/staff/{id}/update', [Controller::class, 'updateStaff']);
