<?php

$servername= "localhost";
$username= "root";
$password= "";
$database= "subscribers";

$conn = mysqli_connect($servername,$username,$password,$database);

if( isset($_POST['fname']) && isset($_POST['lname']) && isset($_POST['email']))
{
  $fname = $_POST['fname'];
  $lname= $_POST['lname'];
  $email = $_POST['email'];
  $sql= "INSERT INTO `subs` (`fname`, `lname`, `email`) VALUES ('$fname', '$lname', '$email');";

  $answer = mysqli_query($conn,$sql);

  if($answer)
  {
      echo "Form Submitted successfully!";
  }

  else 
  {
      echo "problem";
  }
}
?>