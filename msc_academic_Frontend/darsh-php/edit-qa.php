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
if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST['id'], $_POST['name'], $_POST['email'], $_POST['qa'])) {
    $qaId = $_POST['qaId'];
    $name = $_POST['name'];
    $email = $_POST['email'];
    $qa = $_POST['qa'];

    // Update instructor in the database
    $sql = "UPDATE qas SET name = '$name', email = '$email', qa = '$qa' WHERE id = $qaId";

    if ($conn->query($sql) === TRUE) {
        $response = ['success' => true, 'message' => 'QA Officer edited successfully'];
    } else {
        $response = ['success' => false, 'message' => 'Error editing QA Officer: ' . $conn->error];
    }

    echo json_encode($response);
}

$conn->close();
?>
