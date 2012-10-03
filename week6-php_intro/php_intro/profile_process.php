<?php
	if (!isset($_POST['submit'])) {
		// header('Location: profile.php');
		redirect('profile.php');
	}
	// function redirect($url) {
	// 	header('Location: ' . $url);
	// } extrapolate out to external functinos file
?>
<html>
<head>
	<title></title>
</head>
<body>
<?php
	// $name = $_GET['username']; pulls formdata from url
	if (isset($_POST['submit'])) { // makes sure user hit submit button, prevent hacker from getting into profile_process.php
		$name = $_POST['username'];
		echo "<p>Thank you, $name, for logging in.</p>";
	} else {
		echo 'Please go back to the form';
		// even better, they should be redirected back to form
		header('Location: profile.php');
	}

?>

</body>
</html>