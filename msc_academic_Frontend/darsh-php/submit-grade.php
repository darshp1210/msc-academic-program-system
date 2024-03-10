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

// Handle POST request
if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST['name'], $_POST['course'])) {
    $name = $_POST['name'];
    $course = $_POST['course'];

    // Insert instructor into the database
    $sql = "INSERT INTO grades (studetName, instructorName, grades,  courses) VALUES ('$name', '$course')";

    if ($conn->query($sql) === TRUE) {
        $response = ['success' => true, 'message' => 'Course added successfully'];
    } else {
        $response = ['success' => false, 'message' => 'Error adding Course: '];
    }

    echo json_encode($response);
}

$conn->close();
?>
