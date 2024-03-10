<?php
error_reporting(E_ALL);
ini_set('display_errors', 0); // Turn off error display in the response

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");
header('Content-Type: application/json');
$host = 'dxp2913.uta.cloud';
$dbname = 'dxp2913_phase4';
$username = 'dxp2913_phase4';
$password = 'Qwerty@1234567890';

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    try {
        $conn = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        $user = json_decode(file_get_contents('php://input'));

        if (json_last_error() !== JSON_ERROR_NONE) {
            echo json_encode(['status' => 3, 'message' => 'JSON Parsing Error']);
            exit;
        }

        $username = $user->username;
        $password = $user->password;

        $sql = "SELECT * FROM users WHERE username = :username";
        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':username', $username);
        $stmt->execute();
        $userRecord = $stmt->fetch(PDO::FETCH_ASSOC);

        if ($userRecord === false) {
            echo json_encode(['status' => 1, 'message' => 'User does not exist']);
        } else {
            if (password_verify($password, $userRecord['password'])) {
                echo json_encode(['status' => 0, 'message' => 'Successful Login', 'user' => $userRecord]);
            } else {
                echo json_encode(['status' => 2, 'message' => 'Incorrect Password']);
            }
        }
    } catch (PDOException $e) {
        echo json_encode(['status' => 3, 'message' => 'Database Error: ' . $e->getMessage()]);
    }
    // Terminate the script to prevent unexpected output
    exit;
}

// If the request method is not POST, return an error response:
echo json_encode(['status' => 4, 'message' => 'Invalid request method']);
