<?php 
  header("Access-Control-Allow-Origin: *");
  header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
  header("Content-Type: application/json");

  $wd = $_POST['wd'];
//   $wd = 10;
  $conn = mysqli_connect("localhost", "root", "", "transaction");
  $sql = "SELECT * from user";
  $result = mysqli_query($conn, $sql);
  $row = mysqli_fetch_assoc($result);
  $stu_id = $row['id'];
  $stu_ac_bal = $row['ac_bal'] - $wd;
  $sql1 = "UPDATE user SET withdraw = '{$wd}', ac_bal='{$stu_ac_bal}' WHERE id = {$stu_id}";
  $result1 = mysqli_query($conn, $sql1);
  $wddata = array();
  while ($row1 = mysqli_fetch_assoc($result1)) {
      $ud_bal = $row1['ac_bal'];
      $wddata[] = array(
        'udacbal' => $ud_bal,
      );
  }
  echo json_encode($wddata);

  // Close the database connection
mysqli_close($conn);

?>