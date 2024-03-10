<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        // Ensure it's a POST request
        if ($request->isMethod('post')) {
            try {
                // Decode JSON input
                $user = json_decode($request->getContent());

                // Validate JSON parsing
                if (json_last_error() !== JSON_ERROR_NONE) {
                    return response()->json(['status' => 3, 'message' => 'JSON Parsing Error']);
                }

                $username = $user->username;
                $password = $user->password;

                // Check if the user exists
                $userRecord = DB::table('users')->where('username', $username)->first();

                if ($userRecord === null) {
                    return response()->json(['status' => 1, 'message' => 'User does not exist']);
                }

                // Verify password
                if (Hash::check($password, $userRecord->password)) {
                    return response()->json(['status' => 0, 'message' => 'Successful Login', 'user' => $userRecord]);
                } else {
                    return response()->json(['status' => 2, 'message' => 'Incorrect Password']);
                }
            } catch (\Exception $e) {
                return response()->json(['status' => 3, 'message' => 'Database Error: ' . $e->getMessage()]);
            }
        }

        // If the request method is not POST, return an error response:
        return response()->json(['status' => 4, 'message' => 'Invalid request method']);
    }
}
