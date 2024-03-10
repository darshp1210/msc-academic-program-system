// app/Http/Controllers/CourseController.php
<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Course;

class CourseController extends Controller
{
    public function editCourse(Request $request)
    {
        $validatedData = $request->validate([
            'courseId' => 'required',
            'name' => 'required',
            'email' => 'required|email',
            'course' => 'required',
        ]);

        $course = Course::find($validatedData['courseId']);

        if (!$course) {
            return response()->json(['success' => false, 'message' => 'Course not found']);
        }

        $course->update([
            'name' => $validatedData['name'],
            'email' => $validatedData['email'],
            'course' => $validatedData['course'],
        ]);

        return response()->json(['success' => true, 'message' => 'Course edited successfully']);
    }
}
