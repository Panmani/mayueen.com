<?php
// private: 172.16.0.7
// public: 182.61.43.149
$server='172.16.0.7';     
$username='ianma';     
$password='aen777';     
$database='courses';     

$con=mssql_connect($server,$username,$password)     
    or die("Couldn't connect to SQL Server on $server");     
$db=mssql_select_db($database) or die("Couldn't open database $database");  

$sql = "SELECT * FROM course_info NATURAL JOIN course_grades;";
$result = mysqli_query($con,$sql);

while($row = mysqli_fetch_array($result)) {
	echo "<div class='one_course'>";
    echo "<h2>" . $row['course_code'] . ":" . $row['course_name'] . "</h2>";
    echo "<h3>Credit: " . $row['credit'] . ", My grade: " . $row['grade'] . "</h3>";
    echo "<p>" . $row['description'] . "</p>";
    echo "</div>";
}

mysqli_close($con);

?>