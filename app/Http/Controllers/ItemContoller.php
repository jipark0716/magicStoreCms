<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\{Item};

class ItemContoller extends Controller
{
    protected static $validate = [
        'name' => 'string',
        'table_id' => 'integer',
        'player_level' => 'integer',
        'table_level' => 'integer',
        'time' => 'integer',
        'exp' => 'integer',
        'gold' => 'integer',
        'rank_point' => 'integer',
        'mana' => 'integer',
        'image' => 'string',
    ];
    public function create(Request $request, Item $item)
    {
        $request->validate(self::$validate);
        
        $item->fill($request->only(array_keys(self::$validate)));
        $item->save();
        return $item;
    }
    public function update(Request $request, Item $item) {
        $request->validate(self::$validate);
        
        $item->fill($request->only(array_keys(self::$validate)));
        $item->save();
        return $item;
    }
    public function image(Request $request, $path)
    {
        try {
            return \Response::make(\Storage::get('item/'.$path), 200)->header("Content-Type", "image/png");
        } catch (\Throwable $th) {
            abort(404);
        }
    }
}
