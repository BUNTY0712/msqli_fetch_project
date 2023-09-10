<?php
header("Access-Control-Allow-Origin: *"); // Allow requests from any origin (not recommended for production)
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header("Content-Type: application/json");

$conn = mysqli_connect("localhost", "root", "", "news-site");
$sql = "SELECT * FROM user";
$result = mysqli_query($conn, $sql);

$userData = array();

while ($row = mysqli_fetch_assoc($result)) {
    $stu_fname = $row['first_name'];
    $stu_lname = $row['last_name'];

    $userData[] = array(
        'fname' => $stu_fname,
        'lname' => $stu_lname
    );
}

echo json_encode($userData);

mysqli_close($conn);
?>