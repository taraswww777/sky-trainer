<?php

use App\Http\Controllers\RemoteSkyTrainer\UsersController;
use Illuminate\Support\Facades\Route;


Route::post('token', [UsersController::class, 'getToken']);
Route::get('current-user', [UsersController::class, 'getCurrentUser']);
