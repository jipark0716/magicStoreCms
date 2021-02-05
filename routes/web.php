<?php
namespace App\Http\Controllers;

use Illuminate\Support\Facades\Route;

Route::get('item/{path}', [ItemContoller::class, 'image']);