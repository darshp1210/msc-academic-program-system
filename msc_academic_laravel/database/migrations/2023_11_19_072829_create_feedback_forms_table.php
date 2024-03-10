<?php
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateFeedbackFormsTable extends Migration
{
    public function up()
    {
        Schema::create('feedback_forms', function (Blueprint $table) {
            $table->id();
            $table->string('email');
            $table->text('query');
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('feedback_forms');
    }
}

