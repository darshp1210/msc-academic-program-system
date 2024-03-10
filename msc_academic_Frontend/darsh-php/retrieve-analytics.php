<?php
// Enable CORS
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

// Connect to your MySQL database
$servername = "dxp2913.uta.cloud";
$username = "dxp2913_phase4";
$password = "Qwerty@1234567890";
$dbname = "dxp2913_phase4";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$email = $_GET['email'];
// Retrieve instructors from the database
$sql = "SELECT * FROM courses WHERE email = '$email'";
$result = $conn->query($sql);

$details = [];

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $details[] = [
            'course' => $row['course'],
            'email' => $row['email'],
        ];
    }
}

echo json_encode($details);

$conn->close();
?>
