define(function(){
	
	function fn(){				
		var lunbo = $(".lunbo"),
				ul = $(".lunbo ul"),
				aLi = $(".lunbo ul li"),
				ol = $(".lunbo ol"),				
				goPrev = $("#goPrev"),
				goNext = $("#goNext");
			
			var index = 0;//存当前处于第几张图
			var btnIndex = 0;//按钮的下标
			var flag = false;//没有播放
			var len = aLi.length;//图片的张数
			var liHeight = aLi.eq(0).outerHeight();			
			//ul末尾拼接一个aLi[0],计算ul的宽度
			ul.append(aLi.eq(0).clone(true)).css("height",(len+1)*liHeight);
			
			//动态生成按钮
			for(var i = 0; i < len; i++){
				$("<li class='"+ (i==0?"ac":"") +"'>"+ (i+1) +"</li>").appendTo(ol);
			}
			
			//按钮点击
			$(".lunbo ol li").on("click",function(){
				if(!flag){
					flag = true;
					$(this).addClass("ac").siblings().removeClass("ac");
					ul.animate({"top":-$(this).index()*liHeight},1000,function(){
						flag = false;
					});
					index = $(this).index();
				}
			})
			
			goPrev.on("click",function(){
				if(!flag){
					flag = true;
					index--;
					if(index < 0){
						//瞬间拉回补充那张图
						ul.css("top",-len*liHeight);
						//从补充那张图往最后一张图播放的index
						index = len - 1;
					}
					$(".lunbo ol li").eq(index).addClass("ac").siblings().removeClass("ac");
					ul.animate({"top":-index*liHeight},1000,function(){
						flag = false;
					});
				}
			})
			
			goNext.on("click",function(){
				if(!flag){
					flag = true;
					index++;
					if(index >= len){
						$(".lunbo ol li").eq(0).addClass("ac").siblings().removeClass("ac");
						ul.animate({"top":-len*liHeight},1000,function(){
							//瞬间拉回第0张
							ul.css("top",0);
							index = 0;
							flag = false;
						})
					}else{
						$(".lunbo ol li").eq(index).addClass("ac").siblings().removeClass("ac");
						ul.animate({"top":-index*liHeight},1000,function(){
							flag = false;
						})
					}
				}
			})
			
			var timer = null;
			function auto(){
				timer = setInterval(function(){
					goNext.trigger("click");
				},3000);
			}
			auto();
			
			$("#lunbo").hover(function(){
				clearInterval(timer);
			},function(){
				auto();
			});
			
			
			
			
			
			
			
			
			
			
			
			
			
	}
	return fn;
	
})