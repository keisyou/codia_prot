<?php

use App\Http\Controllers\CategoryController;
use App\Http\Controllers\CommentController;
use App\Http\Controllers\LikeController;
use App\Http\Controllers\QuestionController;
use App\Http\Controllers\ReplyController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;

// Public Route
Route::post('/register', [UserController::class, 'register'])->name('register');
Route::post('/login', [UserController::class, 'login'])->name('login');
Route::get('/categories', [CategoryController::class, 'index'])->name('categories.index');
Route::apiResource('/questions', QuestionController::class)->only(['index', 'show']);
Route::apiResource('/{question}/comments', CommentController::class)->only(['index']);

// Authenticated Route
Route::middleware(['auth:sanctum'])->group(function () {
    Route::get('/user', [UserController::class, 'user']);
    Route::delete('/logout', [UserController::class, 'logout'])->name('logout');
    Route::apiResource('/questions', QuestionController::class)->only(['store', 'update', 'destroy']);
    Route::apiResource('/{question}/comments', CommentController::class)->only(['store', 'update', 'destroy']);
    Route::apiResource('/{comment}/replies', ReplyController::class)->only(['store', 'update', 'destroy']);
    Route::post('/{question}/likes', [LikeController::class, 'store']);
    Route::delete('/{question}/likes', [LikeController::class, 'destroy']);
});
