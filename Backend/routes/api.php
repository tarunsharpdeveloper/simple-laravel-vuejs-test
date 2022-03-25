<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ApiController;


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


