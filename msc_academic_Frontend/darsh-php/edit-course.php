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
if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST['courseId'], $_POST['name'], $_POST['email'], $_POST['course'])) {
    $courseId = $_POST['courseId'];
    $name = $_POST['name'];
    $email = $_POST['email'];
    $course = $_POST['course'];

    // Update instructor in the database
    $sql = "UPDATE courses SET name = '$name', email = '$email', course = '$course' WHERE id = $courseId";

    if ($conn->query($sql) === TRUE) {
        $response = ['success' => true, 'message' => 'Course edited successfully'];
    } else {
        $response = ['success' => false, 'message' => 'Error editing Course: ' . $conn->error];
    }

    echo json_encode($response);
}

$conn->close();
?>
