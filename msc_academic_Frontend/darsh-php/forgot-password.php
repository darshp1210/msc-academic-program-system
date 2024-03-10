<?php

session_start();
// header("Access-Control-Allow-Origin: http://:3000");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';
require 'PHPMailer/src/Exception.php';

$servername = "dxp2913.uta.cloud";
$username = "dxp2913_phase4";
$password = "Qwerty@1234567890";
$dbname = "dxp2913_phase4";

function randomPassword() {
    $alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890';
    $pass = array(); //remember to declare $pass as an array
    $alphaLength = strlen($alphabet) - 1; //put the length -1 in cache
    for ($i = 0; $i < 8; $i++) {
        $n = rand(0, $alphaLength);
        $pass[] = $alphabet[$n];
    }
    return implode($pass); //turn the array into a string
}

$pdo = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password, array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION));
    $mail = new PHPMailer(true);
    $email = $_POST['email'];
    $mail->isSMTP();
    $mail->Host       = 'smtp.gmail.com';
    $mail->SMTPAuth   = true;
    $mail->Username   = '4868.stkabirdio@gmail.com'; // Replace with your Gmail email
    $mail->Password   = 'mlimkaxehhelromt'; // Replace with your Gmail password
    $mail->SMTPSecure = 'tls';
    $mail->Port       = 587;

    $mail->setFrom('4868.stkabirdio@gmail.com', 'Darsh patel'); // Replace with your name and email
    $mail->addAddress($email);
    $new_pass = randomPassword();
    $mail->isHTML(true);
    $mail->Subject = 'New Password';
    $email_template = "
        <h2>Hello $email,</h2>
        <p>Your new password is: $new_pass</p>
        <p>For security reasons, please change your password after logging in.</p>
    ";
    $mail->Body = $email_template;

    try {
        $mail->send();
        echo 'Email sent successfully.';
    } catch (Exception $e) {
        echo 'Failed to send email: ' . $mail->ErrorInfo;
    }
?>