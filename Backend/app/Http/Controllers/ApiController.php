<?php

namespace App\Http\Controllers;

use JWTAuth;
use App\Models\User;
use Illuminate\Http\Request;
use Tymon\JWTAuth\Exceptions\JWTException;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Support\Facades\Validator;
use App\Models\Coloum_lists;
use App\Models\cards;
use Carbon\Carbon;
use Artisan;

class ApiController extends Controller
{
    public function register(Request $request)
    {
    	//Validate data
        $data = $request->only('name', 'email', 'password');
        $validator = Validator::make($data, [
            'name' => 'required|string',
            'email' => 'required|email|unique:users',
            'password' => 'required|string|min:6|max:50'
        ]);

        //Send failed response if request is not valid
        if ($validator->fails()) {
            return response()->json(['error' => $validator->messages()], 200);
        }

        //Request is valid, create new user
        $user = User::create([
        	'name' => $request->name,
        	'email' => $request->email,
        	'password' => bcrypt($request->password)
        ]);

        //User created, return success response
        return response()->json([
            'success' => true,
            'message' => 'User created successfully',
            'data' => $user
        ], Response::HTTP_OK);
    }


    public function authenticate(Request $request)
    {
        $credentials = $request->only('email', 'password');

        //valid credential
        $validator = Validator::make($credentials, [
            'email' => 'required|email',
            'password' => 'required|string|min:6|max:50'
        ]);

        //Send failed response if request is not valid
        if ($validator->fails()) {
            return response()->json(['error' => $validator->messages()], 200);
        }

        //Request is validated
        //Crean token
        try {
            if (! $token = JWTAuth::attempt($credentials)) {
                return response()->json([
                	'success' => false,
                	'message' => 'Login credentials are invalid.',
                ], 400);
            }
        } catch (JWTException $e) {
    	return $credentials;
            return response()->json([
                	'success' => false,
                	'message' => 'Could not create token.',
                ], 500);
        }
 	
 		//Token created, return with success response and jwt token
        return response()->json([
            'success' => true,
            'token' => $token,
        ]);
    }


    public function logout(Request $request)
    {
        //valid credential
        $validator = Validator::make($request->only('token'), [
            'token' => 'required'
        ]);

        //Send failed response if request is not valid
        if ($validator->fails()) {
            return response()->json(['error' => $validator->messages()], 200);
        }

		//Request is validated, do logout        
        try {
            JWTAuth::invalidate($request->token);
 
            return response()->json([
                'success' => true,
                'message' => 'User has been logged out'
            ]);
        } catch (JWTException $exception) {
            return response()->json([
                'success' => false,
                'message' => 'Sorry, user cannot be logged out'
            ], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }


    public function get_user(Request $request)
    {
        $this->validate($request, [
            'token' => 'required'
        ]);
 
        $user = JWTAuth::authenticate($request->token);
 
        return response()->json(['user' => $user]);
    }


    public function getList(Request $request)
    {
            $coluomlist = Coloum_lists::get();     
            return response()->json([
                'success' => true,
                'message' => 'list get successfully',
                'data' => $coluomlist
            ], Response::HTTP_OK);    

    }

    public function CreateList(Request $request){

        $list = Coloum_lists::create([
        	'name' => $request->name,
        ]);

        return response()->json([
            'success' => true,
            'message' => 'list create successfully',
            'data' => $list
        ], Response::HTTP_OK);
    }

    public function DeleteList(Request $request){
        
        $user = Coloum_lists::find($request->id); 
        $user->delete();
        
        return response()->json([
            'success' => true,
            'message' => 'list remove successfully',
            'data ' => [],
        ],Response::HTTP_OK);
    }

    public function createCard(Request $request){

   
        $user = cards::insert([
            "column_id" => $request->listId,
        	"description" => $request->name,
        ]);

       

        return response()->json([
            'success' => true,
            'message' => 'card create successfully',
            'data ' => $user,
        ],Response::HTTP_OK);
    }


    public function DeleteCard(Request $request){
        $user = cards::find($request->id);  
        $user->delete();

        return response()->json([
            'success' => true,
            'message' => 'Card remove successfully',
            'data ' => [],
        ],Response::HTTP_OK);
    }

  }
