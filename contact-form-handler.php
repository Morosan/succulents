<?php
  $con = mysqli_connect('localhost','root','');

  if(!$con) {
    echo 'Not Connected To Server';
  }

  if(!mysqli_select_db($con,'succulents')) {
    echo 'Databese Not Selected';
  }

  $Name = $_POST['name'];
  $Email = $_POST['email'];
  $Phone = $_POST['phone'];
  $Message = $_POST['message'];

  $sql = "INSERT INTO contact (Name, Email, Phone, Message) VALUE ('$Name','$Email','$Phone','$Message')";

  if(!mysqli_query($con, $sql)) {
    echo 'Not Inserted';
  } else {
    echo 'Succes! Message has been sent!';
  }

  header("refresh:2; url=Index.html");

?>