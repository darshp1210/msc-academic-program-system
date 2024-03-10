<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Student;

class StudentController extends Controller
{
    public function addStudent(Request $request)
    {
        $validatedData = $request->validate([
            'name' => 'required',
            'email' => 'required|email',
            'course' => 'required',
        ]);

        $student = Student::create($validatedData);

        return response()->json(['success' => true, 'message' => 'Student added successfully']);
    }
}
