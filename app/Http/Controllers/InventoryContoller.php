<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\{Item, Account, Inventory};

class InventoryContoller extends Controller
{
    public function update(Request $request, Account $account)
    {
        $request->validate([
            'amount' => 'integer',
            'item_id' => 'required|integer'
        ]);
        return Inventory::updateOrCreate(
            ['item_id' => $request->item_id, 'account_id' => $account->id],
            ['amount' => $request->input('amount', 0)]
        );
    }
    public function list(Request $request)
    {
        return Item::with('inventory')->get()->map(function($item){
            $result = $item->toArray();
            foreach($item->inventory as $inventory) {
                $result['inventory'][$inventory->account_id] = $inventory->amount;
            }
            $result['inventory'] = (object) $result['inventory'];
            return $result;
        });
    }
}
