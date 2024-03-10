<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Instructor;

class InstructorController extends Controller
{
    public function addInstructor(Request $request)
    {
        $validatedData = $request->validate([
            'name' => 'required',
            'email' => 'required|email',
            'department' => 'required',
        ]);

        $instructor = Instructor::create($validatedData);

        return response()->json(['success' => true, 'message' => 'Instructor added successfully']);
    }
}
