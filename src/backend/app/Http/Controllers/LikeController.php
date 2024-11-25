<?php

namespace App\Http\Controllers;

use App\Models\Question;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Auth;

class LikeController extends Controller
{
    public function store(Question $question): JsonResponse
    {
        $question->likes()->attach(Auth::id());

        return response()->json(200);
    }

    public function destroy(Question $question): JsonResponse
    {
        $question->likes()->detach(Auth::id());

        return response()->json(200);
    }
}
