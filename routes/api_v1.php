<?php

use App\Http\Controllers\RemoteSkyTrainerController;
use Illuminate\Support\Facades\Route;


Route::post('token', [RemoteSkyTrainerController::class, 'getToken']);
