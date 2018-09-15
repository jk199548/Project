require(["config"],function(){
	require(["jquery","cookie","template"],function($,cookie,template){
		
		
		
						
			/*分页*/
			var pageCount=4;
			var index=1;
			var data;
			var allNum;
			var pageNum;
			var flag = true;
		    function selectdata(){
			$.ajax({
				type:"GET",
				url:"http://localhost/server/select.php",
				dataType:"json",
				data:{"pageCount":pageCount,"index":index},
				success:function(data1){
					var data = data1.data;
					var html = template("listEle",{data:data});
					$("#list").html(html);
					//商品总数量
			        var allNum = data1.allNum;
			        //总页数
			        pageNum = Math.ceil(allNum / pageCount);

					//拼接分页
					if(flag){
						for(var i = 1; i <= pageNum; i++){
							var a = document.createElement("a");
							//a.className="curr1";
							if(i === index){
								a.className = "curr";
							}
							a.innerHTML =  '<span>'+ i +'</span>';
							$(a).insertBefore("#spnext");
						}						
						$("#list li").on("click",function(){
								var picpath=$(this).find("img").attr("src");
								//console.log(123);
								var price=$(this).find("em").html();
								var title=$(this).find("b").html();
								$.cookie("title",title,{expires:1,path:'/'});
								$.cookie("price",price,{expires:1,path:'/'});
								$.cookie("picpath",picpath,{expires:1,path:'/'});
								console.log(picpath);
							})
						
						
						
						
						
						
						
						
						
						
						$("#fenye a").find('span').on("click",function(){
					  		
							var str = $(this).html();	
							console.log(str);
							if(!isNaN(Number(str))){
								//代表点击的是对应页码
								console.log(2);
								index = Number(str);
								$("#fenye a").eq(index).addClass('curr').siblings().removeClass('curr');
							}else if(str === "上一页"){
								index--;
								$("#fenye a").eq(index).addClass('curr').siblings().removeClass('curr');
								if(index < 1) index = 1;
							}else if(str === "下一页"){
								
								index++;
								console.log(index);
								$("#fenye a").eq(index).addClass('curr').siblings().removeClass('curr');
								if(index >= pageNum) index = pageNum;
							}
							selectdata();
						
						});
						flag = false;
					}
					
					
				}
			});
		};
		selectdata();
		
		if(document.cookie){
			var str = document.cookie;
			var arrCookie = str.split("; ");			
			for(var i = 0; i < arrCookie.length; i++){
				var arr = arrCookie[i].split("=");
				//console.log(arr);
				if("phonenum" == arr[0]){
				//console.log(arr[1]);
				var phonenum=arr[1];
				$(".pleaselogin").html(phonenum);
				}
				if("buycount"==arr[0]){
					var buycount=arr[1];
					$("#totalnum_top").html(buycount);
					$("#shoppingCartNum").html(buycount);				
				}
			}
		
		}
	});
});