<?php
header('Content-Type: text/html; charset=utf-8');
   if (isset($_POST['name']) && isset($_POST['phone']) && isset($_POST['street']) && isset($_POST['house']) && isset($_POST['corp']) && isset($_POST['flat']) && isset($_POST['flor']) && isset($_POST['comment']) && isset($_POST['change']) && isset($_POST['pay-card']) && isset($_POST['no-call'])) {
      echo 'Данные получены. Имя: '.$_POST['name'].' Возраст: '.$_POST['phone'];
   }
   else {
      echo 'Данные не получены.';
   }
?>