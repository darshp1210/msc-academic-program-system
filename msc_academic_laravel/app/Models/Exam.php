<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Exam extends Model
{
    protected $fillable = ['examName', 'course_id'];

    public function course()
    {
        return $this->belongsTo(Course::class);
    }
}
