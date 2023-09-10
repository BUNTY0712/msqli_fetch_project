<?php 
    include "config.php";
    $fname = mysqli_real_escape_string($conn,$_POST['fname']);
    $lname =  mysqli_real_escape_string($conn,$_POST['lname']);
    $user =  $_POST['user'];
    $password =  mysqli_real_escape_string($conn,md5($_POST['password']));
    $role = mysqli_real_escape_string($conn, $_POST['role']);
    $sql = "SELECT username FROM user WHERE username = '$user'";

    $result = mysqli_query($conn, $sql) or die("Query Failed");
    if(mysqli_num_rows($result) > 0){
   echo "<p> UserName is already Exists </p>";
}else {
 $sql1 = "INSERT INTO user (first_name, last_name, username, password, role) VALUES ('$fname', '$lname', '$user', '$password', '$role')";
}
 $result = mysqli_query($conn, $sql1) or die("Query failed");


?>