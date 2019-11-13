<?php

  require_once('functions.php');
  set_exception_handler('error_handler');
  require_once('db-connection.php');
  startup();

  $userName = $_GET['userName'];
  $passWord = $_GET['passWord'];

  $query = "SELECT * FROM `user` WHERE `user_name` = '$userName' ";

  $getResult = mysqli_query($conn, $query);
  $getOutput = [];

  if ($getResult) {
    if (mysqli_num_rows($getResult) > 0) {
      while ($row = mysqli_fetch_assoc($getResult)) {
        $getOutput[] = $row["password"];
      }
      $hashedPassWord = $getOutput[0];
      if (password_verify($passWord, $hashedPassWord)) {
        $output = [
            "success" => true
        ];
        $json_output = json_encode($output);
        print($json_output);
      } else {
        throw new Exception("Incorrect Information");
      }
    } else {
      throw new Exception("Incorrect Information");
    }
  } else {
    throw new Exception("Query was not sucessful");
  }

?>
