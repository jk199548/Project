"use strict";define(function(){return function(){$(".lunbo");var n=$(".lunbo ul"),l=$(".lunbo ul li"),o=$(".lunbo ol"),i=$("#goPrev"),e=$("#goNext"),a=0,s=!1,t=l.length,c=l.eq(0).outerHeight();n.append(l.eq(0).clone(!0)).css("height",(t+1)*c);for(var u=0;u<t;u++)$("<li class='"+(0==u?"ac":"")+"'>"+(u+1)+"</li>").appendTo(o);$(".lunbo ol li").on("click",function(){s||(s=!0,$(this).addClass("ac").siblings().removeClass("ac"),n.animate({top:-$(this).index()*c},1e3,function(){s=!1}),a=$(this).index())}),i.on("click",function(){s||(s=!0,--a<0&&(n.css("top",-t*c),a=t-1),$(".lunbo ol li").eq(a).addClass("ac").siblings().removeClass("ac"),n.animate({top:-a*c},1e3,function(){s=!1}))}),e.on("click",function(){s||(s=!0,t<=++a?($(".lunbo ol li").eq(0).addClass("ac").siblings().removeClass("ac"),n.animate({top:-t*c},1e3,function(){n.css("top",0),a=0,s=!1})):($(".lunbo ol li").eq(a).addClass("ac").siblings().removeClass("ac"),n.animate({top:-a*c},1e3,function(){s=!1})))});var r=null;function f(){r=setInterval(function(){e.trigger("click")},3e3)}f(),$("#lunbo").hover(function(){clearInterval(r)},function(){f()})}});