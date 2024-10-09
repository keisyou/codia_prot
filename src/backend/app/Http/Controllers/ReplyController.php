<?php

namespace App\Http\Controllers;

use App\Http\Requests\Reply\StoreReplyRequest;
use App\Http\Requests\Reply\UpdateReplyRequest;
use App\Http\Resources\Reply\ReplyResource;
use App\Models\Comment;
use App\Models\Reply;
use Illuminate\Http\JsonResponse;

class ReplyController extends Controller
{
    public function store(StoreReplyRequest $request, Comment $comment): JsonResponse
    {
        $validated = $request->validated();

        $reply = $comment->replies()->create($validated);

        return response()->json(new ReplyResource($reply), 201);
    }

    public function update(UpdateReplyRequest $request, Comment $comment, Reply $reply): JsonResponse
    {
        $validated = $request->validated();

        $reply->update($validated);

        return response()->json(new ReplyResource($reply), 200);
    }
}
