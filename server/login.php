<?php
   $phonenum = $_GET['phonenum'];
   $password = $_GET['password1'];
   header('Access-Control-Allow-Origin:*');
   header("content-type:text/html;charset=utf8");



	mysql_connect("127.0.0.1","root","");
	mysql_select_db("register");
	
	$sql = "SELECT * FROM zhuce WHERE phonenum=$phonenum";
	$result= mysql_query($sql);
	$sql1 = "SELECT COUNT(*) as AllNum FROM zhuce WHERE phonenum=$phonenum";
	$num = mysql_query($sql1);
	$num = mysql_fetch_assoc($num);
	mysql_query("set names 'utf8'");

    $topArr = array();
	while ($arr = mysql_fetch_array($result,MYSQL_ASSOC)) {
		$topArr[]=$arr;
	}
	$json = array("data" => $topArr,"allNum" => $num['AllNum']);
	echo json_encode($json);
	
	
	
	
	mysql_close();
?>