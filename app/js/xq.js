require(["config"],function(){

	require(["xiangqing","jquery","cookie"],function(btn,$,cookie){
		/*选项卡切换效果*/
		btn();	
		
		
		if(document.cookie){
			var str = document.cookie;
					var arrCookie = str.split("; ");
					var buycount;
					var phonenum;
					var price;
					var picpath;
					for(var i = 0; i < arrCookie.length; i++){
					var arr = arrCookie[i].split("=");
					//console.log(arr);
					
					if("phonenum" == arr[0]){
					//console.log(arr[1]);
					    phonenum=arr[1];
					    //console.log(phonenum)
					$(".pleaselogin").html(phonenum);
					}
					if("buycount"==arr[0]){
					    buycount=parseInt(arr[1]);
					     
						$("#totalnum_top").html(buycount);
						$("#shoppingCartNum").html(buycount);
						$("#buycount").val(buycount);
						
					}
					if("picpath"==arr[0]){
					    picpath=arr[1];
					    
						picpath=unescape(picpath);
						console.log(picpath);
						$(".big").find("img").attr("src",picpath);
					}
					if("price"==arr[0]){
						price=arr[1];
						$(".price  b").html("￥"+price);
						
					}
					if("title"==arr[0]){
						var title = arr[1];
						//console.log(title)
						title=decodeURI(title);
						$(".fr h3").html(title);
					}
		}
				}
		
		
		
		
		/*数量减一*/
		$(".jian").on("click",function(e){
                
	            var buycount = $("#buycount").val();
	            var icount = parseInt(buycount,10);
	            //console.log(buycount);		            
	            if (icount == "NaN") {
	                icount = 1;
	            }
	            if (icount <= 1)
	                icount = 1;
	            else
	                icount = icount - 1;
	            $.cookie("buycount",icount,{expires:1,path:'/'});
	            
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
	            $("#buycount").val(icount.toString());
        });
        /*数量加一*/
        $(".jia").on("click", function(e){
	            var buycount = $("#buycount").val();
	            var icount = parseInt(buycount,10);
	            if(icount == "NaN"){
	                icount = 1;
	            }		            
	            if(icount >= 99){
	                icount = 99;}
	            else{
	                icount = icount + 1;
	              }
	            $.cookie("buycount",icount,{expires:1,path:'/'});
	            
	            
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
	            
	            
	            
	            
	            
	            $("#buycount").val(icount.toString());
	    });
	    
	    
	    $(".small ul").find("li").on("click",function(){
	    	/*点击切换图片*/
	    	var str=$(this).find("img").attr("src");
	    	//console.log(str)
	    	$(".big").find("img").attr("src",str);
	    })
	    /*用cookie存储当前商品图片的路径*/
	   
	    $(".a2").on("click",function(){
	    	var picpath=$(".big").find("img").attr("src");
	    	/*解码图片路径图书字符被转义的问题*/
	    	picpath=escape(picpath);
	    	var price=$(".price  b").html();
	    	price=price.slice(1);
	    	//console.log(picpath);
	    	$.cookie("picpath",picpath,{expires:1,path:'/'});
	    	$.cookie("price",price,{expires:1,path:'/'});	    	
	    })
	    /*将该商品的价格存入cookie*/
	    
	    
});
});
