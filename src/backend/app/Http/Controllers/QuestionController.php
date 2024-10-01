<?php

namespace App\Http\Controllers;

use App\Http\Requests\Question\StoreQuestionRequest;
use App\Http\Resources\Question\QuestionResource;
use App\Models\Question;
use Illuminate\Http\JsonResponse;

class QuestionController extends Controller
{
    public function store(StoreQuestionRequest $request): JsonResponse
    {
        $validated = $request->validated();

        $question = Question::create($validated);

        return response()->json(new QuestionResource($question), 201);
    }
}
