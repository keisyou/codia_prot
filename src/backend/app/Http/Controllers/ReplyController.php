<?php

namespace App\Http\Controllers;

use App\Http\Requests\Reply\StoreReplyRequest;
use App\Http\Resources\Reply\ReplyResource;
use App\Models\Comment;
use Illuminate\Http\JsonResponse;

class ReplyController extends Controller
{
    public function store(StoreReplyRequest $request, Comment $comment): JsonResponse
    {
        $validated = $request->validated();

        $reply = $comment->replies()->create($validated);

        return response()->json(new ReplyResource($reply), 201);
    }
}
