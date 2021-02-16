<?php
namespace App\Http\Controllers;

use Illuminate\Support\Facades\Route;

Route::get('item/{path}', [ItemContoller::class, 'image']);
Route::get('creatingtable/{path}', [CreatingTableController::class, 'image']);

Route::view('', 'home');