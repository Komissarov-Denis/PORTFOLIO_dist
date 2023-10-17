<?php 

$name = $_POST['name'];
$phone = $_POST['phone'];
$email = $_POST['email'];
$message = $_POST['message'];

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

// $mail->SMTPDebug = 3;                               	// Enable verbose debug output

$mail->isSMTP();                                    	// Set mailer to use SMTP
$mail->Host = 'smtp.rambler.ru';  						// Specify main and backup SMTP servers
$mail->SMTPAuth = true;                              	// Enable SMTP authentication
$mail->Username = 'testfrontend@rambler.ru'; 			// Наш логин
$mail->Password = '';         							// Наш пароль от ящика
$mail->SMTPSecure = 'ssl';                            	// Enable TLS encryption, `ssl` also accepted
$mail->Port = 465;                                    	// TCP port to connect to
 
$mail->setFrom('testfrontend@rambler.ru', 'PORTFOLIO');	// От кого письмо 
$mail->addAddress('vlg-trans@mail.ru');     			// Add a recipient
// $mail->addAddress('');              					// Name is optional
// $mail->addReplyTo('', 'PORTFOLIO');
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');
//$mail->addAttachment('/var/tmp/file.tar.gz');     	// Add attachments
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');	// Optional name
$mail->isHTML(true);                                	// Set email format to HTML

$mail->Subject = 'Данные';
$mail->Body    = '
	
	Обращение пользователя: "' . $message . '"<br>
	Имя: ' . $name . ' <br>
	Номер телефона: ' . $phone . '<br>
	E-mail: ' . $email . '';

if(!$mail->send()) {
    return false;
} else {
    return true;
}

?>