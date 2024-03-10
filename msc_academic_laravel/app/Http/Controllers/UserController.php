<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    public function register(Request $request)
    {
        // Get user registration data from POST request
        $formData = $request->json()->all();

        if (
            isset($formData['username'])
            && isset($formData['email'])
            && isset($formData['password'])
            && isset($formData['role'])
            && isset($formData['fullName'])
            && isset($formData['birthdate'])
        ) {
            $username = $formData['username'];
            $email = $formData['email'];
            $password = $formData['password'];
            $role = $formData['role'];
            $fullName = $formData['fullName'];
            $birthdate = $formData['birthdate'];

            // Validate input fields
            if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
                return response()->json([
                    'success' => false,
                    'message' => 'Invalid email format. Please enter a valid email address.',
                ]);
            } elseif (!preg_match('/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/', $password)) {
                return response()->json([
                    'success' => false,
                    'message' => 'Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one digit, and one special character.',
                ]);
            }

            try {
                // Check if a user with the given email already exists
                $user = DB::table('users')->where('email', $email)->first();

                if ($user) {
                    // User with the email already exists
                    return response()->json([
                        'success' => false,
                        'message' => 'User with the given email already exists.',
                    ]);
                } else {
                    // Hash the password before storing it in the database
                    $hashedPassword = Hash::make($password);

                    // Insert user data into the 'users' table
                    DB::table('users')->insert([
                        'username' => $username,
                        'email' => $email,
                        'password' => $hashedPassword,
                        'role' => $role,
                        'fullName' => $fullName,
                        'birthdate' => $birthdate,
                    ]);

                    // Registration successful
                    return response()->json([
                        'success' => true,
                        'message' => 'Registration successful!',
                    ]);
                }
            } catch (\Exception $e) {
                // Handle database errors
                return response()->json([
                    'success' => false,
                    'message' => 'Registration failed. Please try again later.',
                ]);
            }
        } else {
            return response()->json([
                'success' => false,
                'message' => 'Incomplete registration data.',
            ]);
        }
    }
}
