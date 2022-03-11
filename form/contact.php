<?php
$name = $_POST['name'];
$mail = $_POST['mail'];
$subject = $_POST['subject'];
$message = $_POST['message']; 

if(isset($_POST['submit'])) {
    if(empty($name) || empty($mail) || empty($subject) || empty($message)) 
        header("Location: inde.php?empty");
    // } else {
    //     if(!filter_var($mail, FILTER_VALIDATE_MAIL)) {
    //       header("Location: index.php?invalidemail")
    //     }
    $name = $_POST['name']; 
    $subject = $_POST['subject']; 
    $mailFrom = $_POST['mail']; 
    $message = $_POST['message']; 


$mailTo = $mail;
$headers = "From: <emanuelmoldovan74@gmail.com>";
$txt = "You have received an e-mail from ".$name.".\n\n".$message;

mail($mailTo, $subject, $txt, $headers) or die("Error");
    }
?>