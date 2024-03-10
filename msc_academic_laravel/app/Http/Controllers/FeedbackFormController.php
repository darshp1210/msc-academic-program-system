<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\FeedbackForm;

class FeedbackFormController extends Controller
{
    public function submitForm(Request $request)
    {
        $validatedData = $request->validate([
            'email' => 'required|email',
            'query' => 'required',
        ]);

        $feedbackForm = FeedbackForm::create($validatedData);

        return response()->json(['status' => 'success', 'message' => 'Form submitted successfully']);
    }
}
