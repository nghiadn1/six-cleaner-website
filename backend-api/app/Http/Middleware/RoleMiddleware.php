<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class RoleMiddleware
{
  public function handle($request, Closure $next, $role)
{
    if (auth()->check() && auth()->user()->role === $role) {
        return $next($request);
    }

    return response()->json(['message' => 'Forbidden'], 403);
}
}
