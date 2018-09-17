<?php
   $title = $_GET['title'];
   
   $price = $_GET['price'];
   //$xiaoliang = $_GET['xiaoliang'];
   header('Access-Control-Allow-Origin:*');
   header("content-type:text/html;charset=utf8");
   //echo $title;
//把标题和答案插入数据库

	mysql_connect("127.0.0.1","root","");
	mysql_select_db("register");	
	$sql = "SELECT * FROM shangping ";
	//echo $sql;	
	mysql_query("set names 'utf8'");	
	$result = mysql_query($sql);
	$topArr = array();
	while ($arr = mysql_fetch_array($result,MYSQL_ASSOC)) {
		array_push($topArr, $arr);
		//$topArr += $arr;
	}
	
	$json = array("data" => $topArr);
	echo json_encode($json);
	mysql_close();
?>