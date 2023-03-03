<?php
require 'config.php';
if (isset($_POST["submit"])){
    $username = $_POST["username"];
    $email = $_POST["email"];
    $password = $_POST["password"];
    $confirmpassword = $_POST["confirmpassword"];
    $duplicate = mysqli_query($conn, "SELECT * FROM tbl_users WHERE username = '$username' OR email = '$email' ");
    if (mysqli_num_rows($duplicate) > 0 ){
        echo
        "<script> alert('username ready');</script>";
    }
    else{
        if ($password == $confirmpassword){
            $query = "INSERT INTO tbl_users VALUES('$username', '$email', '$password')";
            mysqli_query($conn, $query);
            header("Location: login.php");
        }
        else 
        {
            echo
            "<script> alert('password not match');</script>";

        }
    }
}

?>
