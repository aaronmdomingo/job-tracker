<?php

$userName = $_GET['userName'];

$query = "SELECT * FROM `jobs` LEFT JOIN (SELECT `job_id`, GROUP_CONCAT(`message` ORDER BY DATE) as comments
FROM `comments` GROUP BY `job_id`) as c
ON `jobs`.`id` = c.`job_id`
WHERE `jobs`.`user_name` = '$userName' ";

$getResult = mysqli_query($conn, $query);
$getOutput = [];

if ($getResult) {
  if (mysqli_num_rows($getResult) > 0) {
    while ($row = mysqli_fetch_assoc($getResult)) {
      $row['comments'] = explode(',', $row['comments']);
      $row['comments'] = end($row['comments']);
      $getOutput[] = $row;
    }
    $json_get = json_encode($getOutput);
    print($json_get);
  } else {
    throw new Exception("Username does not exist.");
  }
} else {
  throw new Exception("Query was not sucessful");
}


?>
