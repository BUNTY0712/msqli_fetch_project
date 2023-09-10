
<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header("Content-Type: application/json");
$wd = $_POST['withdraw'];
$pin = $_POST['pin'];
// $wd = 20;
// $pin = 12345;

$conn = mysqli_connect("localhost", "root", "", "transaction");

$sql = "SELECT * from user WHERE pin = {$pin}";
$result = mysqli_query($conn, $sql);
$row = mysqli_fetch_assoc($result);
$stu_ac_bal = $row['ac_bal'] - $wd;
$stu_name = $row['name'];

$atmData = array();
$sql1 = "UPDATE user SET withdraw = '{$wd}', ac_bal = '{$stu_ac_bal}' WHERE pin = {$pin}";
$result1 = mysqli_query($conn, $sql1);
$sql2 = "SELECT * FROM user WHERE pin = {$pin}";
$result3 = mysqli_query($conn, $sql2);
//r
$row3 = mysqli_fetch_assoc($result3);
$user_ac_bal = $row3['ac_bal'];
$atmData[] = array(
    'name' => $stu_name,
    'account' => $user_ac_bal
);
echo json_encode($atmData);
if ($result1) {

    $response = ["message" => "Withdrawal successful"];
} else {

    $response = ["message" => "Withdrawal failed"];
}



// if ($result1) {
//     header("Location: http://localhost:3000/");
// } else {
//     echo "Update failed: " . mysqli_error($conn);
// }

mysqli_close($conn);

?>