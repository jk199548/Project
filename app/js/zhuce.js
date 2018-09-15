require(["config"],function(){

	require(["jquery"],function($){
		
		var aInput=document.getElementsByTagName('input');
		//console.log(aInput)
		var arr = [false,false,false,false];
		var obj={};
		aInput[1].onblur = function(){
			var str = this.value;
			var reg = /^((1[358][0-9])|(14[57])|(17[0678])|(19[7]))\d{8}$/;
			if(reg.test(str)){				
				arr[0] = true;
				obj.phonenum=this.value;
				this.parentNode.children[2].style.display = "none";
			}else{
				arr[0] = false;
				this.parentNode.children[2].style.display = "block";
			}
		}			
		aInput[2].onblur = function(){			
			var str = this.value;
			var reg = /^[a-z]{6,20}$/i;
			if(reg.test(str)){				
				arr[1] = true;
				obj.username=this.value;
				this.parentNode.children[2].style.display = "none";
			}else{
				arr[1] = false;
				this.parentNode.children[2].style.display = "block";
			}
		}		
		aInput[3].onblur = function(){			
			var str = this.value;
			var reg = /^.{3,}$/;
			if(reg.test(str)){				
				arr[2] = true;
				obj.password1=this.value;
				this.parentNode.children[2].style.display = "none";
			}else{
				arr[2] = false;
				this.parentNode.children[2].style.display = "block";
			}
		}		
		aInput[4].onblur = function(){			
			var str = this.value;
			var reg = /^.{3,}$/;
			if(reg.test(str)){				
				arr[3] = true;
				this.parentNode.children[2].style.display = "none";
			}else{
				arr[3] = false;
				this.parentNode.children[2].style.display = "block";
			}
			if(aInput[3].value !=aInput[4].value){
				this.parentNode.children[2].style.display = "block";
			}
		}
		
		$("button").on("click",function(){
			//console.log(123);
			//e.preventDefault();
			if(aInput[1].value ==""|| aInput[2].value =="" || aInput[3].value =="" || aInput[4].value ==""){				
			}
			else{
				$.get("http://localhost/server/register.php",{phonenum:obj.phonenum,username:obj.username,password1:obj.password1},function(data){
			      if(data.code){
			      	    alert("注册成功");
			      		location="login.html";
			                  }			     
			},"json")
				}			
		})				
		
	});
});