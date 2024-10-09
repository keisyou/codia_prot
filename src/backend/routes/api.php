<?php

use App\Http\Controllers\CommentController;
use App\Http\Controllers\QuestionController;
use App\Http\Controllers\ReplyController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::apiResource('/questions', QuestionController::class);
Route::get('/{question}/comments', [CommentController::class, 'index']);
Route::post('/{question}/comments', [CommentController::class, 'store']);
Route::patch('/{question}/comments/{comment}', [CommentController::class, 'update']);
Route::delete('/{question}/comments/{comment}', [CommentController::class, 'destroy']);
Route::apiResource('/{comment}/replies', ReplyController::class)->only(['store', 'destroy']);
Route::patch('/{comment}/replies/{reply}', [ReplyController::class, 'update']);
