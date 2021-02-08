<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Route;

Route::model('item', \App\Models\Item::class);
Route::put('item', [ItemContoller::class, 'create']);
Route::post('item/{item}', [ItemContoller::class, 'update']);

Route::put('table', [CreatingTableController::class, 'create']);
Route::get('tables', [CreatingTableController::class, 'list']);