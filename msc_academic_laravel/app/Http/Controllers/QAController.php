<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\QA;

class QAController extends Controller
{
    public function addQA(Request $request)
    {
        $validatedData = $request->validate([
            'name' => 'required',
            'email' => 'required|email',
            'qa' => 'required',
        ]);

        $qaOfficer = QA::create($validatedData);

        return response()->json(['success' => true, 'message' => 'QA Officer added successfully']);
    }
}
