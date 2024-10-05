<?php

namespace App\Http\Controllers;

use App\Http\Requests\Question\StoreQuestionRequest;
use App\Http\Resources\Question\QuestionResource;
use App\Models\Question;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\DB;

class QuestionController extends Controller
{
    public function store(StoreQuestionRequest $request): JsonResponse
    {
        $validated = $request->validated();

        $question = DB::transaction(function () use ($validated) {
            $question = Question::create($validated);
            $question->categories()->attach($validated['category_id']);
            return Question::with('categories')->find($question->id);
        });

        return response()->json(new QuestionResource($question), 201);
    }
}
