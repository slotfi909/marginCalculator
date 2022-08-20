<?php
$servername = "sql300.byetcluster.com";
$username = "gigfa_30752710";
$password = "12736293";
$dbname="gigfa_30752710_tradeInfo";

$conn = new mysqli($servername, $username, $password,$dbname);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}
echo "Connected successfully","<br>";

$problem=0;
if (empty($_GET["totalName"])){
          echo "total is required","<br>";
          $problem=1;
      }
if (empty($_GET["specifiedMoneyName"])){
          echo "specified Money is required","<br>";
          $problem=1;
      }
if (empty($_GET["riskName"])){
          echo "risk is required","<br>";
          $problem=1;
      }
if (empty($_GET["rewardName"])){
          echo "reward is required","<br>";
          $problem=1;
      }
if (empty($_GET["leverageName"])){
          echo "leverage is required","<br>";
          $problem=1;
      }
if (empty($_GET["fractionName"])){
          echo "fraction is required","<br>";
          $problem=1;
      }

$total=$_GET["totalName"];
$specified=$_GET["specifiedMoneyName"];
$risk=$_GET["riskName"];
$reward=$_GET["rewardName"];
$leverage=$_GET["leverageName"];
$fraction=$_GET["fractionName"];
if($problem==0){
    // echo "no problem detected";
$sql = "INSERT INTO Info(total,specified,risk,reward,leverage,fraction) VALUES ($total,$specified,$risk,$reward,$leverage,$fraction)";
if ($conn->query($sql) === TRUE) {
  echo "New record created successfully";
} else {
  echo "Error: " . $sql . "<br>" . $conn->error;
}
}





?>