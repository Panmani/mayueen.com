<?php
// private: 172.16.0.7
// public: 182.61.43.149
$con = mysqli_connect('mysql56.rdsmtk5qnnktiu5.rds.gz.baidubce.com',
	'ianma',
	'aen777',
	'courses');

if (!$con) {
    die('Could not connect: ' . mysqli_error($con));
}

mysqli_select_db($con,"ajax_demo");
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