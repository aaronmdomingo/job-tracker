<?php
    $bodyData = getBodyData();
    $user_name = $bodyData["userName"];
    $company = $bodyData["company"];
    $position = $bodyData["position"];
    $status = $bodyData["status"];
    $comments = $bodyData["comments"];
    $date = $bodyData["date"];
    $id = $bodyData["id"];

    $filter_user_name = str_replace("'","\'", $user_name);
    $filter_company = str_replace("'","\'", $company);
    $filter_position = str_replace("'","\'", $position);
    $filter_status = str_replace("'","\'", $status);
    $filter_comments = str_replace("'","\'", $comments);

    $getQuery = "SELECT * FROM `user` WHERE `user`.`user_name` = '$filter_user_name' ";
    $patchQuery = "UPDATE `jobs`
                SET `company` = '$filter_company', `status` = '$filter_status',
                    `comments` = '$filter_comments', `position` = '$filter_position'
                    WHERE `id` = '$id' ";

    $getResult = mysqli_query($conn, $getQuery);

    if (!$getResult) {
        throw new Exception('Username does not exist!');
    }

    $patchResult = mysqli_query($conn, $patchQuery);

    if(!$patchResult) {
        throw new Exception('Adding Entry failed');
    } else {
        $output = [
            "success" => true
        ];
        $json_output = json_encode($output);
        print($json_output);
    }


?>
