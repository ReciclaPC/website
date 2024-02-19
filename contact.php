<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect form data
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $message = $_POST['message'];

    // Set recipient email address
    $to = "rreciclapc@gmail.com";

    // Set email subject
    $subject = "New Contact Form Submission";

    // Build email body
    $body = "Name: $name\n";
    $body .= "Email: $email\n";
    $body .= "Phone: $phone\n";
    $body .= "Message:\n$message";

    // Send email
    if (mail($to, $subject, $body)) {
        echo "Your message has been sent successfully.";
    } else {
        echo "Sorry, there was an error sending your message.";
    }
}
?>
