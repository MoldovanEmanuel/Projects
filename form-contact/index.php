<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact Form</title>
</head>
<body>
    <form action="contact.php" method="post">
        <label for="name">Name</label>
        <input type="text" name="name" id="name" palaceholder="Full Name"> 
        <label for="mail">Mail</label>
        <input type="text" name="mail" id="mail" placeholder="Your E-mail">
        <label for="name">Subject</label>
        <input type="text" name="subject" id="subject" placeholder="Subject">
        <label for="message">Message</label>
        <textarea name="message" id="message" cols="30" rows="10" placeholder="Write your message here"></textarea>
        <button type="submit" name="submit">Send</button>
    </form>
</body>
</html>