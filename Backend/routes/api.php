<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ApiController;
use App\Http\Controllers\ProductController;

Route::post('login', [ApiController::class, 'authenticate']);
Route::post('register', [ApiController::class, 'register']);

Route::group(['middleware' => ['jwt.verify']], function() {
    Route::get('logout', [ApiController::class, 'logout']);
    Route::get('get_user', [ApiController::class, 'get_user']);
    Route::get('products', [ProductController::class, 'index']);
    Route::get('products/{id}', [ProductController::class, 'show']);
    Route::post('create', [ProductController::class, 'store']);
    Route::put('update/{product}',  [ProductController::class, 'update']);
    Route::delete('delete/{product}',  [ProductController::class, 'destroy']);
});

Route::get('getList', [ApiController::class, 'getList'])->middleware('Authtoken');

Route::post('createList', [ApiController::class, 'CreateList'])->middleware('Authtoken');

Route::post('deleteList', [ApiController::class, 'DeleteList'])->middleware('Authtoken');;

Route::post('createCard', [ApiController::class, 'createCard'])->middleware('Authtoken');

Route::post('DeleteCard', [ApiController::class, 'DeleteCard'])->middleware('Authtoken');

// Route::get('/backupdatabase', function () {

//     // $exitCode = Artisan::call('db:backup');

//     Spatie\DbDumper\Databases\MySql::create()
//     ->setDbName(env('DB_DATABASE'))
//     ->setUserName(env('DB_USERNAME'))
//     ->setPassword(env('DB_PASSWORD'))
//     ->dumpToFile('dump.sql');
// });

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


