<?php

    $bodyData = getBodyData();
    $id = $bodyData["id"];


    $queryCheck = "SELECT * FROM `comments` WHERE `id` = '$id' ";

    $check = mysqli_query($conn, $queryCheck);
    $row = mysqli_num_rows($check);

    if ($row === 0) {
        throw new Exception("No job to delete");
    } else {
        $queryDelete = "DELETE FROM `comments` WHERE `id` = '$id' ";

        $checkDelete = mysqli_query($conn, $queryDelete);

        if(!$checkDelete) throw new Exception("Deleting job failed");

        $output = [
                "success" => true,
                "status" => 'Job deleted!'
            ];
            $json_output = json_encode($output);
            print($json_output);
    }
?>
