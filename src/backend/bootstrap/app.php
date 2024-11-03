<?php

use Illuminate\Foundation\Application;
use Illuminate\Foundation\Configuration\Exceptions;
use Illuminate\Foundation\Configuration\Middleware;
use Illuminate\Http\JsonResponse;
use Symfony\Component\HttpKernel\Exception\HttpException;

return Application::configure(basePath: dirname(__DIR__))
    ->withRouting(
        web: __DIR__.'/../routes/web.php',
        api: __DIR__.'/../routes/api.php',
        commands: __DIR__.'/../routes/console.php',
        health: '/up',
    )
    ->withMiddleware(function (Middleware $middleware) {})
    ->withExceptions(function (Exceptions $exceptions) {
        // Validation error
        $exceptions->render(function (\Illuminate\Validation\ValidationException $e): JsonResponse {
            return response()->json([
                'code' => 400,
                'message' => 'Invalid request parameter',
                'errors' => $e->errors(),
            ], 400);
        });

        // Authentication error
        $exceptions->render(function (\Illuminate\Auth\AuthenticationException $e): JsonResponse {
            return response()->json([
                'code' => 401,
                'message' => 'Unauthenticated',
            ], 401);
        });

        // Forbidden error
        $exceptions->render(function (\Symfony\Component\HttpKernel\Exception\AccessDeniedHttpException $e): JsonResponse {
            return response()->json([
                'code' => 403,
                'message' => 'Forbidden',
            ], 403);
        });

        // Not Found error
        $exceptions->render(function (\Symfony\Component\HttpKernel\Exception\NotFoundHttpException $e): JsonResponse {
            return response()->json([
                'code' => 404,
                'message' => 'Not Found',
            ], 404);
        });

        // Other exception errors
        $exceptions->render(function (\Exception $e): JsonResponse {
            $status = $e instanceof HttpException ? $e->getStatusCode() : 500;

            return response()->json([
                'code' => $status,
                'message' => $e->getMessage(),
            ], $status);
        });
    })->create();
