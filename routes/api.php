<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Route;

Route::model('item', \App\Models\Item::class);
Route::model('account', \App\Models\Account::class);

Route::put('item', [ItemContoller::class, 'create']);
Route::post('item/{item}', [ItemContoller::class, 'update']);
Route::get('items', [ItemContoller::class, 'list']);

Route::put('table', [CreatingTableController::class, 'create']);
Route::get('tables', [CreatingTableController::class, 'list']);

Route::post('inventory/{account}', [InventoryContoller::class, 'update']);
Route::get('inventorys', [InventoryContoller::class, 'list']);
Route::get('accounts', [AccountContoller::class, 'list']);
