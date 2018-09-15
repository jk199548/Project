//引入require;
require(["config"],function(){
	//再引入依赖的模块;
	require(["lunbo","daojishi","cookie","jquery"],function(fn,daojishi,cookie,$){
		fn();
		daojishi();
		
		
		$(".list3 li").on("click",function(){
			var picpath=$(this).find("img").attr("src");
			var price=$(this).find("font").html();
			var title=$(this).find("b").html();
	    	price=price.slice(1);
	    	console.log(price);
			console.log(picpath);
			    //picpath=escape(picpath);
			$.cookie("picpath",picpath,{expires:1,path:'/'});
			$.cookie("price",price,{expires:1,path:'/'});
			$.cookie("title",title,{expires:1,path:'/'});
		})
		
		/*判断是否存在cookie,如果存在就重新渲染首页的登录信息*/
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
			
			//console.log(str);
			$(".dl").remove();
			$(".wellcom").html("欢迎"+phonenum+"来到家有购物");
			$("<a/>").addClass("tuichu").html("退出").css({"width":"50px","display":"block","height":"20px","margin-left":"90px"}).appendTo(".wellcom");
			
			}
			if("buycount"==arr[0]){
				var buycount=arr[1];
				$("#totalnum_top").html(buycount);
				$("#shoppingCartNum").html(buycount);				
			}
			}
		}
			/*点击退出，删除cookie*/
			$(".tuichu").on("click",function(){
			$.cookie('phonenum', '', { expires: -1 }); // 删除 cookie
			//$.cookie('buycount', '', { expires: -1 });
			
			//$.cookie('price', '', { expires: -1 });
			//$.cookie('picpath', '', { expires: -1 });
			alert("退出成功");
			location="index.html";
			});
			
			
			//
			//
		});
	
});
