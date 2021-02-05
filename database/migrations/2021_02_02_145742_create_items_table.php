<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateItemsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('items', function (Blueprint $table) {
            $table->integer('id')->autoIncrement();
            $table->smallInteger('table_id')->nullable();
            $table->smallInteger('player_level')->nullable();
            $table->smallInteger('table_level')->nullable();
            $table->integer('time')->nullable();
            $table->integer('exp')->nullable();
            $table->integer('gold')->nullable();
            $table->integer('rank_point')->nullable();
            $table->integer('mana')->nullable();
            $table->string('image', 200)->nullable();
            $table->string('name', 20);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('items');
    }
}
