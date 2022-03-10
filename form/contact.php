<?php
$name = $_POST['name'];
$mail = $_POST['mail'];
$subject = $_POST['subject'];
$message = $_POST['message']; 

if(isset($_POST['submit'])) {
    $name = $_POST['name']; 
    $subject = $_POST['subject']; 
    $mailFrom = $_POST['mail']; 
    $message = $_POST['message']; 


$mailTo = "webmaster@komoder.com";
$headers = "From: ".$mail;
$txt = "You have received an e-mail from ".$name.".\n\n".$message;


mail($mailTo, $subject, $txt, $headers);
header("Location: index.php?mailsend") //confirmare ca s-a trimis 
}
?>