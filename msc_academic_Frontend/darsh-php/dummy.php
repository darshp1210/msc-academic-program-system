<?php
// header('Content-Type: application/json; charset=UTF-8');
// header('Access-Control-Allow-Origin: *');

// // default response data
// $dataResponse = array();
// $dataResponseStatus = 0;

// // email
// $emailTitle = "Sended from React JS";

// // user
// $userName = addslashes(trim($_POST['name']));
// $userEmail = addslashes(trim($_POST['email']));
// $userMessage = addslashes(trim($_POST['message']));

// // sender
// $senderName = "Harsh";
// $senderEmail = "harshmuniwala33@gmail.com";

// // receiver
// $receiverName = "Darsh";
// $receiverEmail = "pdarsh1210@gmail.com";

// // ENVIO DE EMAIL
// require_once("../phpmailer/PHPMailerAutoload.php");
// $mail = new PHPMailer();
// $mail->IsSMTP = ('smtp');
// $mail->Mailer = ('mail');
// $mail->SMTPSecure = 'ssl';
// $mail->SMTPAuth = true;
// $mail->From = $senderEmail;
// $mail->FromName = $senderName;
// $mail->AddReplyTo( $userEmail, $userName );
// $mail->AddAddress( $receiverEmail, $receiverName );
// $mail->IsHTML(true);
// $mail-> CharSet = 'UTF-8';
// // $mail->AddEmbeddedImage("./logo.png", "logomarca");

// // e-mail template
// include 'email_template_default.php';

// $mail->Subject  = $emailTitle;
// $mail->Body = $emailBody;
// $mail->AltBody = $emailBody;
// $sendedEmail = $mail->Send();
// $mail->ClearAllRecipients();
// $mail->ClearAttachments();

// if ($sendedEmail) {
// 	$dataResponseStatus = 1;
// } else {
// 	$dataResponseStatus = 2;
// }

// $dataResponse['response'] = $dataResponseStatus;

// $resultadosJson = json_encode($dataResponse);
// echo $resultadosJson;

session_start();
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
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



$pdo = new PDO("mysql:servername=$servername;dbname=$dbname", $username, $password, array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION));

// $data = json_decode(file_get_contents('php://input'), true);

    // if (isset($data) && !empty($data)) {
    //     $email = $data['email'];

    //     $check_email_query = "SELECT * FROM users WHERE email=:email LIMIT 1";
    //     $stmt_check_email = $pdo->prepare($check_email_query);
    //     $stmt_check_email->bindParam(':email', $email);
    //     $stmt_check_email->execute();

    //     if ($stmt_check_email->rowCount() > 0) {
    //         $user = $stmt_check_email->fetch(PDO::FETCH_ASSOC);

    //         // Generate a new password
    //         $newPassword = generateRandomPassword();
    //         $hashedPassword = password_hash($newPassword, PASSWORD_BCRYPT);

    //         // Update the database with the new password
    //         $updatePasswordQuery = "UPDATE users SET password = :password WHERE email = :email";
    //         $stmtUpdatePassword = $pdo->prepare($updatePasswordQuery);
    //         $stmtUpdatePassword->bindParam(':password', $hashedPassword);
    //         $stmtUpdatePassword->bindParam(':email', $email);

    //         if ($stmtUpdatePassword->execute()) {
    //             // Send the new password to the user's email
    //             sendNewPasswordEmail($user['username'], $email, $newPassword);
    //             $_SESSION['status'] = "New password sent to your email address.";
    //         } else {
    //             $_SESSION['status'] = "Failed to update password.";
    //         }
    //     } else {
    //         $_SESSION['status'] = "Email not found.";
    //     }
    // }


// function generateRandomPassword($length = 8)
// {
//     $characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
//     $password = '';

//     for ($i = 0; $i < $length; $i++) {
//         $password .= $characters[rand(0, strlen($characters) - 1)];
//     }

//     return $password;
// }

// function sendNewPasswordEmail($username, $email, $newPassword)
// {
    $mail = new PHPMailer(true);

    $mail->isSMTP();
    $mail->Host       = 'smtp.gmail.com';
    $mail->SMTPAuth   = true;
    $mail->Username   = '4868.stkabirdio@gmail.com'; // Replace with your Gmail email
    $mail->Password   = 'mlimkaxehhelromt'; // Replace with your Gmail password
    $mail->SMTPSecure = 'tls';
    $mail->Port       = 587;

    $mail->setFrom('4868.stkabirdio@gmail.com', 'Darsh patel'); // Replace with your name and email
    $mail->addAddress($email);

    $mail->isHTML(true);
    $mail->Subject = 'New Password';
    $email_template = "
        <h2>Hello $username,</h2>
        <p>Your new password is: darsh121</p>
        <p>For security reasons, please change your password after logging in.</p>
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