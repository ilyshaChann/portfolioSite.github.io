<?php
$name = $_POST["name"];
$email = $_POST["email"];
$message = $_POST["message"];
$token = "5867614957:AAEnPh7J8ShQur6W4rKqwndCWW6JY-Qg7Cw";
$chat_id = "-1001699565788";

$arr = array(
	'Имя пользователя: ' => $name,
	'email пользователя: ' => $email,
	'Сообщение пользователя: ' => $message,
);
$txt = "";
foreach($arr as $key => $value) {
	$txt .= "<b>".$key."</b> ".$value."%0A";
};
$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}", "r");
if ($sendToTelegram) {
	return true;
	alert('Спасибо! Ваша заявка принята. Мы свяжемся с вами в ближайшее время.');
}
else {
	return false;
	alert('Что-то пошло не так. ПОпробуйте отправить заявку ещё раз.');
}
?>