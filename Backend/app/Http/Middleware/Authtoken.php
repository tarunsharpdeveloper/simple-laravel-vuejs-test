<?php

namespace App\Http\Middleware;
use Symfony\Component\HttpFoundation\Response;
use Closure;
use Illuminate\Http\Request;

class Authtoken
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle(Request $request, Closure $next)
    {
        $envToken =  env('JWT_SECRET', 'ktX3edecXQG6b7ehLrAXhxxqlwUPGNzHgLuois8OJX0lxPKQftKMXbZjEks8JgPc');
        $token = $request->bearerToken();
        
        if($envToken == $token) {
            return $next($request);
        } else{
            return response()->json([
                'success' => false,
                'message' => 'Unauthorized User',
                'data' => ""
            ], Response::HTTP_OK);
        }
    }
}
