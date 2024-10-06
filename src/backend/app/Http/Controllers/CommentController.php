<?php

namespace App\Http\Controllers;

use App\Http\Requests\Comment\StoreCommentRequest;
use App\Http\Resources\Comment\CommentResource;
use App\Models\Question;
use Illuminate\Http\JsonResponse;

class CommentController extends Controller
{
    public function store(StoreCommentRequest $request, Question $question): JsonResponse
    {
        $validated = $request->validated();

        $comment = $question->comments()->create($validated);

        return response()->json(new CommentResource($comment), 201);
    }
}
