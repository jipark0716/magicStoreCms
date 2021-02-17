<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\{Account};

class AccountContoller extends Controller
{
    public function list(Request $request)
    {
        return Account::all();
    }
}
