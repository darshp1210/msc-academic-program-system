<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';
require 'PHPMailer/src/Exception.php';

// Function to establish a database connection using PDO
function connectToDatabase() {
    // Replace 'hostname', 'username', 'password', and 'database' with your database connection details
    $host = 'dxp2913.uta.cloud';
    $username = 'dxp2913_phase4';
    $password = 'Qwerty@1234567890';
    $database = 'dxp2913_phase4';

    try {
        $pdo = new PDO("mysql:host=$host;dbname=$database", $username, $password, array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION));
        return $pdo;
    } catch (PDOException $e) {
        die("Connection failed: " . $e->getMessage());
    }
}

// Function to validate email format
function isValidEmail($email) {
    return filter_var($email, FILTER_VALIDATE_EMAIL) !== false;
}

// Function to validate password format (at least one uppercase, one lowercase, one digit, and one special character)
function isValidPassword($password) {
    return preg_match('/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/', $password);
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Get user registration data from POST request
    $formData = json_decode(file_get_contents('php://input'), true);

    if (isset($formData['username']) && isset($formData['email']) && isset($formData['password'])) {
        $username = $formData['username'];
        $email = $formData['email'];
        $password = $formData['password'];
        $role = $formData['role'];
		$fullName = $formData['fullName'];
        $birthdate = $formData['birthdate'];
        

        // Validate input fields
        if (!isValidEmail($email)) {
            $response = array(
                'success' => false,
                'message' => 'Invalid email format. Please enter a valid email address.',
            );
        } else if (!isValidPassword($password)) {
            $response = array(
                'success' => false,
                'message' => 'Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one digit, and one special character.',
            );
        } else {
            // Connect to the database
            $pdo = connectToDatabase();

            try {
                // Replace 'rec_users' with the name of your 'rec_users' table
                $table = 'users';

                // Check if a user with the given email already exists
                $stmt = $pdo->prepare("SELECT * FROM $table WHERE email = :email");
                $stmt->bindParam(':email', $email);
                $stmt->execute();
                $user = $stmt->fetch();

                if ($user) {
                    // User with the email already exists
                    $response = array(
                        'success' => false,
                        'message' => 'User with the given email already exists.',
                    );
                } else {
                    // Hash the password before storing it in the database
                    $hashedPassword = password_hash($password, PASSWORD_BCRYPT);

                    // Insert user data into the 'rec_users' table, including additional columns
$stmt = $pdo->prepare("INSERT INTO $table (username, email, password, role, fullName, birthdate) VALUES (:username, :email, :password, :role, :fullName, :birthdate)");
$stmt->bindParam(':username', $username);
$stmt->bindParam(':email', $email);
$stmt->bindParam(':password', $hashedPassword);
$stmt->bindParam(':role', $role);
$stmt->bindParam(':fullName', $fullName); // Corrected parameter name
$stmt->bindParam(':birthdate', $birthdate);
$stmt->execute();

                    // Registration successful
                    $response = array(
                        'success' => true,
                        'message' => 'Registration successful!',
                    );
                }
            } catch (PDOException $e) {
                // Handle database errors
                $response = array(
                    'success' => false,
                    'message' => 'Registration failed. Please try again later.',
                );
            }
        }
    } else {
        $response = array(
            'success' => false,
            'message' => 'Incomplete registration data.',
        );
    }
    
    // Set response headers


    // Return JSON response
    echo json_encode($response);
}

// function sendVerificationEmail($username, $email, $random_token)
// {
    $mail = new PHPMailer(true);

    $mail->isSMTP();
    $mail->Host       = 'smtp.gmail.com';
    $mail->SMTPAuth   = true;
    $mail->Username   = '4868.stkabirdio@gmail.com'; // Replace with your Gmail email
    $mail->Password   = 'mlimkaxehhelromt'; // Replace with your Gmail password
    $mail->SMTPSecure = 'tls';
    $mail->Port       = 587;

    $mail->setFrom('4868.stkabirdio@gmail.com', 'darsh'); // Replace with your name and email
    $mail->addAddress($email);

    $mail->isHTML(true);
    $mail->Subject = 'verification here';
    $email_template = "
        
        <p>Please click the link below to verify your email and login</p>
        <a href='https://dxp2913.uta.cloud/login'>Verify Email</a>
    ";
    $mail->Body = $email_template;

    try {
        $mail->send();
        echo 'Email sent successfully.';
    } catch (Exception $e) {
        echo 'Failed to send email: ' . $mail->ErrorInfo;
    }
// }


?>
