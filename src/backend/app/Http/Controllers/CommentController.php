<?php

namespace App\Http\Controllers;

use App\Http\Requests\Comment\StoreCommentRequest;
use App\Http\Resources\Comment\CommentCollection;
use App\Http\Resources\Comment\CommentResource;
use App\Models\Question;
use Illuminate\Http\JsonResponse;

class CommentController extends Controller
{
    public function index(Question $question): JsonResponse
    {
        $comments = $question->comments()->with('replies')->orderBy('created_at', 'asc')->get();

        return response()->json(new CommentCollection($comments), 200);
    }

    public function store(StoreCommentRequest $request, Question $question): JsonResponse
    {
        $validated = $request->validated();

        $comment = $question->comments()->create($validated);

        return response()->json(new CommentResource($comment), 201);
    }
}
