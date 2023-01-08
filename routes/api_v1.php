<?php

use App\Http\Controllers\RemoteSkyTrainerController;
use Illuminate\Support\Facades\Route;


Route::post('getToken', [RemoteSkyTrainerController::class, 'getToken']);
