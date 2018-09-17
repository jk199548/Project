<?php
   $phonenum = $_GET['phonenum'];
   $username = $_GET['username'];
   $password = $_GET['password1'];
   header('Access-Control-Allow-Origin:*');
   header("content-type:text/html;charset=utf8");

//把标题和答案插入数据库

	mysql_connect("127.0.0.1","root","");
	mysql_select_db("register");
	
	$sql = "INSERT INTO zhuce (phonenum,username,password1) VALUES ('$phonenum','$username','$password')";
	
	mysql_query("set names 'utf8'");
	
	$isSucc = mysql_query($sql);
	if($isSucc){
		echo '{"code":1}';
	}else{
		echo '{"code":0}';
	}
	
	mysql_close();
?>