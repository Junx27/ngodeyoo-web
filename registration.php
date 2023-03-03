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
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Resgistration</title>
</head>
<body>
    <h1>Registration</h1>
    <form class= "" action="" method="post" autocomplete="off">
        <label for="username">Username : </label>
        <input type="text" name="username" id="username" required value=""><br>
        <label for="email">Email : </label>
        <input type="text" name="email" id="email" required value=""><br>
        <label for="password">Password : </label>
        <input type="text" name="password" id="password" required value=""><br>
        <label for="confirmpassword">Confirmpassword : </label>
        <input type="text" name="confirmpassword" id="confirmpassword" required value=""><br>
        <button type="submit" name="submit" >Resgister</button>
    </form>
    <br>
    <a href="login.php">login</a>
</body>
</html>