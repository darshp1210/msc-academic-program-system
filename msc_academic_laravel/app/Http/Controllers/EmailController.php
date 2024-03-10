// app/Http/Controllers/EmailController.php
<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use PHPMailer\PHPMailer\PHPMailer;

class EmailController extends Controller
{
    public function sendEmail(Request $request)
    {
        $mail = new PHPMailer();

        $emailBody = view('emails.email_template_default')->render();

        $mail->Subject = $emailTitle;
        $mail->Body = $emailBody;
        $mail->AltBody = $emailBody;

        $sendedEmail = $mail->send();

        if ($sendedEmail) {
            $dataResponseStatus = 1;
        } else {
            $dataResponseStatus = 2;
        }

        $dataResponse['response'] = $dataResponseStatus;

        return response()->json($dataResponse);
    }
}
