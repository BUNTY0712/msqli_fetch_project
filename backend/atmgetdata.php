<?php 
header("Access-Control-Allow-Origin: *"); // Allow requests from any origin (not recommended for production)
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header("Content-Type: application/json");
$pin = $_POST['pin'];
// $pin = 1234;
$conn = mysqli_connect("localhost", "root" ,"" ,"transaction");
$sql = "SELECT * FROM user WHERE pin = {$pin}";
$result = mysqli_query($conn, $sql);
$atmData = array();

while ($row = mysqli_fetch_assoc($result)){
    $stu_name = $row['name'];
    $stu_current_bal = $row['ac_bal'];
    
    $atmData[] = array(
        'name' => $stu_name,
        'ac_bal' => $stu_current_bal
    );
}

echo json_encode($atmData);
mysqli_close($conn);

?> 