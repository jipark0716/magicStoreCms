<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Item extends Model
{
    use HasFactory;

    public $fillable = ['name', 'table_id', 'player_level', 'table_level', 'time', 'exp', 'gold', 'rank_point', 'mana', 'image'];
    public $timestamps = false;

    protected static function boot()
    {
        parent::boot();

        static::updated(function($data) {
            if($data->getRawOriginal('image') != $data->getAttributes()['image']) {
                \Storage::delete($data->getRawOriginal('image'));
            }
        });
    }

    public function setImageAttribute($base64)
    {
        \Storage::put(
            $this->attributes['image'] = 'item/'.\Str::random(12).'.png',
            base64_decode($base64)
        );
    }

    public function getImageAttribute($image)
    {
        return url($image);
    }
}