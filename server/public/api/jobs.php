<?php

    require_once('functions.php');
    set_exception_handler('error_handler');
    require_once('db-connection.php');

    startup();

    switch($_SERVER['REQUEST_METHOD']){
        case 'POST':
            // require_once('user-add.php');
            break;
        case 'GET':
            require_once('jobs-get.php');
            break;
        case 'PATCH':
            // require_once('user-add-gym.php');
            break;
        case 'DELETE':
            // require_once('user-delete-gym.php');
            break;
    }

?>
