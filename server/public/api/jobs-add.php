<?php

    $bodyData = getBodyData();
    $user_name = $bodyData["userName"];
    $company = $bodyData["company"];
    $position = $bodyData["position"];
    $status = $bodyData["status"];
    $comments = $bodyData["comments"];
    $date = date("Y-m-d");

    $filter_user_name = str_replace("'","\'", $user_name);
    $filter_company = str_replace("'","\'", $company);
    $filter_position = str_replace("'","\'", $position);
    $filter_status = str_replace("'","\'", $status);
    $filter_comments = str_replace("'","\'", $comments);

    $getQuery = "SELECT * FROM `user` WHERE `user`.`user_name` = '$filter_user_name' ";
    $postQuery = "INSERT INTO `jobs` (`user_name`, `company`, `position`, `status`, `comments`, `date`)
                    VALUES ('$filter_user_name', '$filter_company', '$filter_position', '$filter_status', '$filter_comments', '$date')";
    $getCommentQuery = "SELECT `jobs`.`id` FROM `jobs` WHERE `jobs`.`user_name` = '$filter_user_name' AND `jobs`.`company` = '$filter_company'
                        AND `jobs`.`position` = '$filter_position' AND `jobs`.`status` = '$filter_status' AND `jobs`.`date` = '$date' ";

    $getResult = mysqli_query($conn, $getQuery);


    if (!$getResult) {
        throw new Exception('Username does not exist!');
    }

    $postResult = mysqli_query($conn, $postQuery);

    if(!$postResult) {
        throw new Exception('Adding Entry failed');
    } else {

        $getCommentResult = mysqli_query($conn, $getCommentQuery);

        if (!$getCommentResult) {
            throw new Exception('Job does not exist');
        }

        if (mysqli_num_rows($getCommentResult) > 0) {
            while ($row = mysqli_fetch_assoc($getCommentResult)) {
                $jobID = $row["id"];
            }
        }

        $postCommentQuery = "INSERT INTO `comments` (`job_id`, `date`, `message`)
                            VALUES ('$jobID', '$date', '$filter_comments') ";

        $postCommentResult = mysqli_query($conn, $postCommentQuery);

        if (!$postCommentResult) {
            throw new Exception ('Adding entry failed');
        } else {
            $output = [
            "success" => true
            ];
            $json_output = json_encode($output);
            print($json_output);
        }
    }


?>
