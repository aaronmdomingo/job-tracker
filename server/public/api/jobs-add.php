<?php

    $bodyData = getBodyData();
    $user_name = $bodyData["userName"];
    $company = $bodyData["company"];
    $status = $bodyData["status"];
    $comments = $bodyData["comments"];
    $date = date("Y-m-d");

    $filter_user_name = str_replace("'","\'", $user_name);
    $filter_company = str_replace("'","\'", $company);
    $filter_status = str_replace("'","\'", $status);
    $filter_comments = str_replace("'","\'", $comments);

    $getQuery = "SELECT * FROM `user` WHERE `user`.`user_name` = '$filter_user_name' ";
    $postQuery = "INSERT INTO `jobs` (`user_name`, `company`, `status`, `comments`, `date`)
                    VALUES ('$filter_user_name', '$filter_company', '$filter_status', '$filter_comments', '$date')";

    $getResult = mysqli_query($conn, $getQuery);


    if (!$getResult) {
        throw new Exception('Username does not exist!');
    }

    $postResult = mysqli_query($conn, $postQuery);

    if(!$postResult) {
        throw new Exception('Adding Entry failed');
    } else {
        $output = [
            "success" => true
        ];
        $json_output = json_encode($output);
        print($json_output);
    }


?>
