require(["config"],function(){

	require(["login","jquery","cookie"],function(fn,$,cookie){
		
		fn();
		document.getElementById("loginbtn").onclick=function(){
				var obj={};
				
				var phonenum=document.getElementById("txtphonenum").value;
				//console.log(phonenum);
				obj.phonenum=phonenum;
				
				//console.log(obj.phonenum);
				var password1=document.getElementById("txtPass").value;
				obj.password1=password1;
				
				$.get("http://localhost/server/login.php",{phonenum:obj.phonenum,password1:obj.password1},function(da){								
					if(da.allNum==0){
						alert('该手机号码未注册');
					}else if(da.data[0].phonenum===phonenum && da.data[0].password1===password1){
						
						alert("登录成功");
						console.log(phonenum);
						$.cookie("phonenum",phonenum,{expires:1,path:'/'});
						//cookie.setCookie("phonenum",phonenum,4);
						location="/index.html";
						
					}else if(da.data[0].phonenum===phonenum && da.data[0].password1!==password1){
						alert("密码错误");
					}
					
					
				},'json');
				
			}
	});
});