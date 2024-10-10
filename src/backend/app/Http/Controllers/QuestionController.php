<?php

namespace App\Http\Controllers;

use App\Http\Requests\Question\StoreQuestionRequest;
use App\Http\Requests\Question\UpdateQuestionRequest;
use App\Http\Resources\Question\QuestionCollection;
use App\Http\Resources\Question\QuestionResource;
use App\Models\Question;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\DB;

class QuestionController extends Controller
{
    public function index(): JsonResponse
    {
        $questions = Question::orderBy('created_at', 'desc')->paginate(15);

        return response()->json(new QuestionCollection($questions), 200);
    }

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

    public function show(Question $question): JsonResponse
    {
        return response()->json(new QuestionResource($question), 200);
    }

    public function update(UpdateQuestionRequest $request, Question $question): JsonResponse
    {
        $validated = $request->validated();

        DB::transaction(function () use ($question, $validated) {
            $question->update($validated);
            $question->categories()->sync($validated['category_id']);
        });

        return response()->json(new QuestionResource($question), 200);
    }

    public function destroy(Question $question): JsonResponse
    {
        $question->delete();

        return response()->json(200);
    }
}
