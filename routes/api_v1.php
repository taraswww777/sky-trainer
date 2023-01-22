<?php

use App\Http\Controllers\RemoteSkyTrainer\CoursesController;
use App\Http\Controllers\RemoteSkyTrainer\DialogController;
use App\Http\Controllers\RemoteSkyTrainer\UsersController;
use Illuminate\Support\Facades\Route;


Route::post('token', [UsersController::class, 'getToken']);
Route::get('current-user', [UsersController::class, 'getCurrentUser']);

Route::get('courses', [CoursesController::class, 'getListCourses']);
Route::get('courses/{courseId}', [CoursesController::class, 'getCourse']);
Route::get('courses/{courseId}/phrases', [CoursesController::class, 'getCoursePhrases']);
Route::get('courses/{courseId}/phrases/{phraseId}', [CoursesController::class, 'getCoursePhraseById']);

Route::get('dialog/start/{courseId}', [DialogController::class, 'start']);
Route::get('dialog/stop/{courseId}', [DialogController::class, 'stop']);
Route::get('dialog/reset/{courseId}', [DialogController::class, 'reset']);
Route::post('dialog/speech-result', [DialogController::class, 'speechResult']);
