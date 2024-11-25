<?php

namespace App\Http\Controllers;

use App\Http\Requests\Comment\DestroyCommentRequest;
use App\Http\Requests\Comment\StoreCommentRequest;
use App\Http\Requests\Comment\UpdateCommentRequest;
use App\Http\Resources\Comment\CommentCollection;
use App\Http\Resources\Comment\CommentResource;
use App\Models\Comment;
use App\Models\Question;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Auth;

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

        $comment = $question->comments()->create([...$validated, 'user_id' => Auth::id()]);

        return response()->json(new CommentResource($comment), 200);
    }

    public function update(UpdateCommentRequest $request, Question $question, Comment $comment): JsonResponse
    {
        $validated = $request->validated();

        $comment->update($validated);

        return response()->json(new CommentResource($comment), 200);
    }

    public function destroy(DestroyCommentRequest $request, Question $question, Comment $comment): JsonResponse
    {
        $comment->delete();

        return response()->json(200);
    }
}
