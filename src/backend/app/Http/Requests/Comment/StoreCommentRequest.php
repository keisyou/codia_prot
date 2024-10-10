<?php

namespace App\Http\Requests\Comment;

use Illuminate\Contracts\Validation\Validator;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;

class StoreCommentRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'content' => ['required'],
        ];
    }

    /**
     * Get the error messages for the defined validation rules.
     *
     * @return array<string, string>
     */
    public function messages(): array
    {
        return [
            'content.required' => 'コメントは必須です',
        ];
    }

    protected function failedValidation(Validator $validator): HttpResponseException
    {
        $response = response()->json([
            'error' => [
                'code' => 400,
                'message' => 'Invalid request parameter',
                'errors' => $validator->errors(),
            ],
        ], 400);

        throw new HttpResponseException($response);
    }
}
