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
Route::post('/{question}/comments', [CommentController::class, 'store']);
Route::post('/{comment}/replies', [ReplyController::class, 'store']);
