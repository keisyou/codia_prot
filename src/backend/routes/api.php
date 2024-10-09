<?php

use App\Http\Controllers\CommentController;
use App\Http\Controllers\QuestionController;
use App\Http\Controllers\ReplyController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

// 質問
Route::apiResource('/questions', QuestionController::class);

// コメント
Route::apiResource('/{question}/comments', CommentController::class)->only(['index', 'store', 'destroy']);
Route::patch('/{question}/comments/{comment}', [CommentController::class, 'update']);

// リプライ
Route::apiResource('/{comment}/replies', ReplyController::class)->only(['store', 'destroy']);
Route::patch('/{comment}/replies/{reply}', [ReplyController::class, 'update']);
