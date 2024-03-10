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

$result = $mysqli -> query('SELECT * FROM (SELECT name, message, time FROM chat_messages ORDER BY time DESC LIMIT 20) tmp ORDER BY time ASC');

?>
<html>
    <head>
    <title>Chat App In my WDM Class</title>
    <style type="text/css">
        * {
            box-sizing:border-box;
            }
        #content {
            width:600px;
            max-width:100%;
            margin:30px auto;
            background-color:#fafafa;
            padding:20px;
        }
        #message-box {
            min-height:400px;
            overflow:auto;
        }
        .author {
            margin-right:5px;
            font-weight:600;
        }
        .text-box {
            width:100%;
            border:1px solid #eee;
            padding:10px;
            margin-bottom:10px;
        }
    </style>
    </head>
    <body>
        <div id="content">
        <div id="message-box">
            <?php foreach ($result as $row) : ?>
        <div>
            <span class="author"><?= $row['name'] ?>:</span>
            <span class="messsage-text"><?= $row['message'] ?></span>
        </div>
        <?php endforeach; ?>
        </div>
        <div id="connecting">Connecting to web sockets server...</div>
            <input type="text" class="text-box" id="name-input" placeholder="Your Name">
            <input type="text" class="text-box" id="message-input" placeholder="Your Message">
        <p>Press enter to send message</p>
        </div>
        <!-- <script type="text/javascript" src="js-index.js"></script> -->
        <script>
            var sessionValue = localStorage.getItem('username');
            console.log('Value from localStorage:', sessionValue);
        </script>
        </body>
    </html>

