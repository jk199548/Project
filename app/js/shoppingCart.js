require(["config"],function(){
	require(["jquery","cookie"],function($,cookie){
		
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
						picpath =unescape(picpath);//解码图片路径特殊字符被转义的问题；
						console.log(picpath);
						$("#picpath").attr("src",picpath);
					}
					
					if("price"==arr[0]){
						price=parseInt(arr[1]);
						
						//$("#price").html(price);
						$("#price1").html(price);
						var num=buycount;
						//console.log(num);									
					}
					if("title"==arr[0]){
						var title=arr[1];
						console.log(title);
						title=decodeURI(title);
						$("#title b").html(title);
					}
					
		}
					var num=price*buycount;
					console.log(num);
					$("#price").html(num);
					$("#pay_money").html(num);
					$("#jianshu").html(buycount);
				}
        
		/*点击购物车中的+和-进行数量的加减*/
		$("#jian").on("click",function(e){               
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
	            $.cookie("buycount",icount,{expires:1,path:'/'});//在每点击一次jian时，重新存储cookie里的商品数量
	            
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
					
					
					
					if("price"==arr[0]){
						price=parseInt(arr[1]);						
						//$("#price").html(price);
						$("#price1").html(price);
						var num=buycount;
						//console.log(num);
									
					}
					    
				    }
					var num=price*buycount;
					//console.log(num);
					$("#price").html(num);//小计的html
					$("#pay_money").html(num);//应付多少钱
					$("#jianshu").html(buycount);
					//console.log(price);
				    //console.log(buycount);
			    }
			        $("#buycount").val(icount.toString());
		        });
        
        $("#jia").on("click", function(e){
	            var buycount = $("#buycount").val();
	            var icount = parseInt(buycount,10);
	            if(icount == "NaN"){
	                icount = 1;
	            }		            
	            if(icount >= 99){
	                icount = 99;}
	            else{
	                icount = icount + 1;
	                $.cookie("buycount",icount,{expires:1,path:'/'});
	            }		            
	            $("#buycount").val(icount.toString());	
	            	           
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
					
					/*获取价格*/
					
					if("price"==arr[0]){
						price=parseInt(arr[1]);
						
						//$("#price").html(price);
						$("#price1").html(price);
						var num=buycount;
						//console.log(num);
									
					}
					    
				    }
					var num=price*buycount;
					console.log(num);
					$("#price").html(num);
					$("#pay_money").html(num);
					$("#jianshu").html(buycount);
					
					
			    }
			            	      
			    });
		$(".del").on("click",function(){
			$(".trolley").remove();
			$("<div/>").html("亲，您的购物车里好像没有东西哟，再去逛逛").css({"width":"700px","height":"200px","font-size":"20px","color":"red","margin":"0 auto","text-align":"center","padding-top":"100px"}).appendTo(".main");
		})
       
	});
});