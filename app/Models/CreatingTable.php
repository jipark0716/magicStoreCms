<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CreatingTable extends Model
{
    use HasFactory;
    
    public $timestamps = false;
    public $fillable = ['image', 'image_open'];
    
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
            $this->attributes['image'] = 'creatingtable/'.\Str::random(12).'.png',
            base64_decode($base64)
        );
    }
    public function getImageAttribute($image)
    {
        return url($image);
    }

    public function setImageOpenAttribute($base64)
    {
        \Storage::put(
            $this->attributes['image_open'] = 'creatingtable/'.\Str::random(12).'.png',
            base64_decode($base64)
        );
    }
    public function getImageOpenAttribute($image)
    {
        return url($image);
    }
}
