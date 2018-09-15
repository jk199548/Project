define(function(){
	function fn(){
		$(function() {
					var flag=false;
					$(".hd").find("a").on("click",function(){
					$(this).addClass('curr').siblings().removeClass('curr');					
					if(!flag){
				    $(".fr").find("div").eq(1).css("display","none").siblings().css("display","block");
				    flag=true;
				   }else{
				   	$(".fr").find("div").eq(1).css("display","block").siblings().eq(1).css("display","none");
				   	flag=false;
				   }
			       });	         	
			});	
			
			
	}
	return fn;
})