<?php
require 'config.php';
if(isset($_POST["submit"])){
    $usernameemail = $_POST["usernameemail"];
    $password = $_POST["password"];
    $result = mysqli_query($conn, "SELECT * FROM tbl_users WHERE username = '$usernameemail' OR email = '$usernameemail' ");
    $row = mysqli_fetch_assoc($result);
    if(mysqli_num_rows($result) > 0){
        if($password == $row["password"]){
            $_SESSION["login"] = true;
            $_SESSION["id"] =$row["id"];
            header("Location: home.php");
        }
        else{
            "<script> alert('password salah');</script>";
        }

    }
    else{
        "<script> alert('user not ready');</script>";

    }
}


?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Login</h1>
    <form class="" action="" method="post" autocomplete="0ff">
        <label for="usernameemail">Username or Email : </label>
        <input type="text" name="usernameemail" id="usernameemail" required value=""> <br>
        <label for="password">Password</label>
        <input type="text" name="password" id="password" required value=""><br>
        <button type="submit" name="submit">Login</button>
    </form>
    <br>
    <a href="registration.php">registration</a>
</body>
</html>