<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header("Content-Type: application/json");
$pin = $_POST['pin'];
// print_r($pin) or die;
// $pin = 123456;
$conn = mysqli_connect("localhost", "root", "", "transaction");
$sql = "SELECT * from user WHERE pin = '{$pin}' ";
$result = mysqli_query($conn, $sql);
$row = mysqli_fetch_assoc($result);
$user_pin = $row['pin'];
$userDta = array();
$userDta[] = array(
    'userpin' => $user_pin,
);
echo json_encode($userDta);
?>