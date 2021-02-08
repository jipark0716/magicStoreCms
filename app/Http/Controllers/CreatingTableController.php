<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\CreatingTable;

class CreatingTableController extends Controller
{
    public function create(Request $request, CreatingTable $table)
    {
        $table->fill($request->only(['image', 'image_open']));
        $table->save();
        return $table;
    }
    public function list(Request $request)
    {
        return CreatingTable::all();
    }
    public function image(Request $request, $path)
    {
        try {
            return \Response::make(\Storage::get('creatingtable/'.$path), 200)
                ->header("Content-Type", "image/png")
                ->setMaxAge(60 * 60 * 24 * 30) //seconds
                ->setPublic();
        } catch (\Throwable $th) {
            abort(404);
        }
    }
}
