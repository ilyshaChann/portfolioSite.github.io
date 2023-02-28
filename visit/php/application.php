<?php

$email = $_POST['email_user_application'];
$type = $_POST['type_site'];
$design = $_POST['design_site'];
$adaptive = $_POST['adaptive_site'];
$name = $_POST['name_user_application'];
$message = $_POST['message_application'];

$token = "5825245415:AAERwBikCw8amzSgjt5xRzsUYWLHriSdE4g";
$chat_id = "-841111495";
$arr = array(
	'Имя заказчик: ' => $name,
	'Почта заказчик: ' => $email,
	'Пожелания заказчика: ' => $message,
	'Тип сайта: ' => $type,
	'Дизайн сайта: ' => $design,
	'Адаптив сайта: ' => $adaptive,
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