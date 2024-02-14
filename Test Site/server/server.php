<?php
$servername = "localhost";
$username = "root";
$database = "portfolio";

// Create connection
$conn = new mysqli($servername, $username, $database);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get data from POST request
$email = $_POST['email'];
$date = $_POST['date'];

// Prepare SQL statement
$sql = "INSERT INTO subscribers (email, date) VALUES ('$email', '$date')";

if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>
