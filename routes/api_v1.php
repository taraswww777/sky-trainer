<?php

use App\Http\Controllers\RemoteSkyTrainer\CoursesController;
use App\Http\Controllers\RemoteSkyTrainer\UsersController;
use Illuminate\Support\Facades\Route;


Route::post('token', [UsersController::class, 'getToken']);
Route::get('current-user', [UsersController::class, 'getCurrentUser']);
Route::get('courses', [CoursesController::class, 'getListCourses']);
Route::get('courses/{courseId}', [CoursesController::class, 'getCourseById']);
