<?php

namespace App\Http\Controllers;

use App\Http\Requests\Reply\DestroyReplyRequest;
use App\Http\Requests\Reply\StoreReplyRequest;
use App\Http\Requests\Reply\UpdateReplyRequest;
use App\Http\Resources\Reply\ReplyResource;
use App\Models\Comment;
use App\Models\Reply;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Auth;

class ReplyController extends Controller
{
    public function store(StoreReplyRequest $request, Comment $comment): JsonResponse
    {
        $validated = $request->validated();

        $reply = $comment->replies()->create([...$validated, 'user_id' => Auth::id()]);

        return response()->json(new ReplyResource($reply), 200);
    }

    public function update(UpdateReplyRequest $request, Comment $comment, Reply $reply): JsonResponse
    {
        $validated = $request->validated();

        $reply->update($validated);

        return response()->json(new ReplyResource($reply), 200);
    }

    public function destroy(DestroyReplyRequest $request, Comment $comment, Reply $reply): JsonResponse
    {
        $reply->delete();

        return response()->json(200);
    }
}
