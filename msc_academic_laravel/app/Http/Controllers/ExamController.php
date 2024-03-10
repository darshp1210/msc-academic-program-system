<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Exam;
use App\Models\Course;

class ExamController extends Controller
{
    public function addExam(Request $request)
    {
        $validatedData = $request->validate([
            'name' => 'required',
            'course' => 'required',
        ]);

        $course = Course::find($validatedData['course']);
        if (!$course) {
            return response()->json(['success' => false, 'message' => 'Course not found']);
        }

        $exam = new Exam([
            'examName' => $validatedData['name'],
        ]);

        $course->exams()->save($exam);

        return response()->json(['success' => true, 'message' => 'Exam added successfully']);
    }
}
