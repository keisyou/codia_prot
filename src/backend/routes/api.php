<?php

use App\Http\Controllers\CategoryController;
use App\Http\Controllers\CommentController;
use App\Http\Controllers\QuestionController;
use App\Http\Controllers\ReplyController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;

// User
Route::post('/register', [UserController::class, 'register'])->name('register');
Route::post('/login', [UserController::class, 'login'])->name('login');
Route::middleware(['auth:sanctum'])->group(function () {
    Route::get('/user', [UserController::class, 'user']);
    Route::delete('/logout', [UserController::class, 'logout'])->name('logout');
});
// Question
Route::apiResource('/questions', QuestionController::class);
// Category
Route::get('/categories', [CategoryController::class, 'index'])->name('categories.index');
// Comment
Route::apiResource('/{question}/comments', CommentController::class)->only(['index', 'store', 'update', 'destroy']);
// Reply
Route::apiResource('/{comment}/replies', ReplyController::class)->only(['store', 'update', 'destroy']);
