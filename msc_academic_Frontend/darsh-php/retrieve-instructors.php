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

// Retrieve instructors from the database
$sql = "SELECT * FROM instructors";
$result = $conn->query($sql);

$instructors = [];

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $instructors[] = [
            'id' => $row['id'],
            'name' => $row['name'],
            'email' => $row['email'],
            'department' => $row['department']
        ];
    }
}

echo json_encode($instructors);

$conn->close();
?>
