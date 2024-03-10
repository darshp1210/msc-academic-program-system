<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\ContactRequest;

class ContactRequestController extends Controller
{
    public function submitForm(Request $request)
    {
        $validatedData = $request->validate([
            'email' => 'required|email',
            'query' => 'required',
        ]);

        $contactRequest = ContactRequest::create($validatedData);

        return response()->json(['status' => 'success', 'message' => 'Form submitted successfully']);
    }
}
