define(function(){
			function btn(){
				
					var flag=false;
					$(".details .content .hd").find("li").on("click",function(){
					$(this).addClass('curr').siblings().removeClass('curr');					
					if(!flag){
				    $(".details .content .bd .img").css("display","none").siblings().css("display","block");
				    flag=true;
				   }else{
				   	$(".details .content .bd .img").css("display","block").siblings().css("display","none");
				   	flag=false;
				   }
			        });
	
			
			};
		return btn;
		
	
});