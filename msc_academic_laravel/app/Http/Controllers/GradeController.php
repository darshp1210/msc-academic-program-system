<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class GradeController extends Controller
{
    public function addGrade(Request $request)
    {
        $name = $request->input('name');
        $course = $request->input('course');

        // Validate input fields (add more validation if needed)
        if (!$name || !$course) {
            return response()->json([
                'success' => false,
                'message' => 'Name and course are required fields.',
            ]);
        }

        // Insert grade into the 'grades' table
        try {
            DB::table('grades')->insert([
                'studetName' => $name,
                'instructorName' => $course,
                // Add other fields as needed
            ]);

            return response()->json([
                'success' => true,
                'message' => 'Grade added successfully',
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Error adding grade: ' . $e->getMessage(),
            ]);
        }
    }
}
