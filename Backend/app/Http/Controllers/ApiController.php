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
  

    public function getList(Request $request)
    {
         
         $created_at = $request->get('createat');
         $status = $request->get('status');
         
            
            if(empty($created_at) && empty($status)){

            $coluomlist = Coloum_lists::Where('status', 0)->get();  
            return response()->json([
                'success' => true,
                'message' => 'list get successfully',
                'data' => $coluomlist
            ], Response::HTTP_OK);   


            } else {

                $coluomlist = Coloum_lists::whereDate('created_at', '=', $created_at)->Where('status', $status)->get();  
                return response()->json([
                    'success' => true,
                    'message' => 'list get successfully',
                    'data' => $coluomlist
                ], Response::HTTP_OK);    
            }
            
    }

    public function CreateList(Request $request){
        $today = date("Y-m-d");
        $list = Coloum_lists::create([
        	'name' => $request->name 
        ]);

        return response()->json([
            'success' => true,
            'message' => 'list create successfully',
            'data' => $list
        ], Response::HTTP_OK);
    }

    public function DeleteList(Request $request){
        
        // $user = Coloum_lists::find($request->id); 
        $data = Coloum_lists::where('id', $request->id)->update(['status'=>1]);
        
        
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
