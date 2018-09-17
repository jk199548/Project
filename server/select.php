<?php
	$pageCount = $_GET['pageCount'];
	$index = $_GET["index"];
	mysql_connect("127.0.0.1","root","");
	mysql_select_db('register');
	//查询当前页码的3条
	/*index 1  limit 0,3
	index 2  limit 3,3
	index 3  limit 6,3*/
	header('Access-Control-Allow-Origin:*');
    header("content-type:text/html;charset=utf8");
	$sql = "SELECT * FROM shangping LIMIT ".($index-1)*$pageCount.",".$pageCount;
	mysql_query("set names 'utf8'");
	$result = mysql_query($sql);
	//查询总数量，根据总数量计算总页数
	$sql1 = "SELECT COUNT(*)  as AllNum FROM shangping";
	$num = mysql_query($sql1);
	$num = mysql_fetch_assoc($num);
	//echo json_encode($num);


	//存放所有查询到数据的数组
	$topArr = array();
	while ($arr = mysql_fetch_array($result,MYSQL_ASSOC)) {
		array_push($topArr, $arr);
	}

	
	$json = array("allNum" => $num['AllNum'] , "data" => $topArr);
	echo json_encode($json);


?>

