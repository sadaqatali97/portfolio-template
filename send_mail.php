<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: *");
 $name = $_POST['ajax_name'];
 $email = $_POST['ajax_email'];
 $phone = $_POST['ajax_phone'];
 $message = $_POST['ajax_message'];
 if (!empty($name)) {
  $to = "mail@mail.com";
  $subject = "Your Subject";
  
  $message = "
  <html>
  <head>
  <title>HTML email</title>
  </head>
  <body>
  <p>This email contains HTML Tags!</p>
  <table>
  <tr>
  <th>Name</th>
  <th>Email</th>
  <th>Phone</th>
  <th>Message</th>
  </tr>
  <tr>
  <td>".$name."</td>
  <td>".$email."</td>
  <td>".$phone."</td>
  <td>".$message."</td>
  </tr>
  </table>
  </body>
  </html>
  ";
  
  // Always set content-type when sending HTML email
  $headers = "MIME-Version: 1.0" . "\r\n";
  $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
  
  // More headers
  $headers .= 'From: '.$email . "\r\n";
 $response =  mail($to,$subject,$message,$headers);
 echo $response;
 exit();
 }

?>