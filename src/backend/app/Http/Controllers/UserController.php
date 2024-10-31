<?php

namespace App\Http\Controllers;

use App\Http\Requests\User\LoginRequest;
use App\Http\Requests\User\RegisterRequest;
use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;

class UserController extends Controller
{
    public function user(Request $request)
    {
        return $request->user();
    }

    public function register(RegisterRequest $request): JsonResponse
    {
        try {
            $validated = $request->validated();

            $user = User::create($validated);
            $token = $user->createToken('BearerToken', ['*'], now()->addWeek());

            return response()->json([
                'token' => $token->plainTextToken,
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'code' => 500,
                'message' => '登録処理中にエラーが発生しました',
            ], 500);
        }
    }

    public function login(LoginRequest $request): JsonResponse
    {
        try {
            $validated = $request->validated();

            $user = User::where('email', $validated['email'])->firstOrFail();

            if (! Hash::check($validated['password'], $user->password)) {
                throw ValidationException::withMessages([
                    'email' => ['The provided credentials are incorrect.'],
                ]);
            }

            $token = $user->createToken('BearerToken', ['*'], now()->addWeek());

            return response()->json(['token' => $token->plainTextToken]);
        } catch (\Illuminate\Database\Eloquent\ModelNotFoundException $e) {
            return response()->json([
                'code' => 404,
                'message' => 'ユーザーが見つかりません',
            ], 404);
        } catch (\Exception $e) {
            return response()->json([
                'code' => 500,
                'message' => 'ログイン処理中にエラーが発生しました',
            ], 500);
        }
    }

    public function logout(Request $request)
    {
        $request->user()->currentAccessToken()->delete();

        return response()->json([
            'message' => 'Logged out successfully',
        ]);
    }
}
