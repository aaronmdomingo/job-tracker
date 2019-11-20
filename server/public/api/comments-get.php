<?php

$id= $_GET['id'];

$query = "SELECT * FROM `comments` WHERE `job_id` = '$id' ORDER BY `comments`.`date` DESC";

$getResult = mysqli_query($conn, $query);
$getOutput = [];

if ($getResult) {
  if (mysqli_num_rows($getResult) > 0) {
    while ($row = mysqli_fetch_assoc($getResult)) {
      $getOutput[] = $row;
    }
    $json_get = json_encode($getOutput);
    print($json_get);
  } else {
    throw new Exception("Job id does not exist.");
  }
} else {
  throw new Exception("Query was not sucessful");
}


?>
