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
        define("SECRET", env('JWT_SECRET'));
        $token = $request->bearerToken();
        
        if(SECRET === $token) {
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
