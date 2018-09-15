define(function(){
	function daojishi(){
		var oSpan = document.getElementById("time");
		
		var i2 = document.getElementById("i2");
		var i3 = document.getElementById("i3");
		var i4 = document.getElementById("i4");
			var endDate = new Date(2018,10,1,0,0,0);
			function fn(){
				var date = new Date();
			
				var time = parseInt((endDate.getTime() - date.getTime())/1000);
				var day = parseInt(time/60/60/24);
				time = time - day*24*60*60;
				var hour = parseInt(time/60/60);
				time = time - hour*60*60;
				var minute = parseInt(time/60);
				time = time - minute*60;
				
				
				i2.innerHTML = addZero(hour);
				i3.innerHTML = addZero(minute);
				i4.innerHTML = addZero(time);
				
			}
			function addZero(n){
				return n<10? "0"+n : n;
			}
			fn();
			setInterval(fn,1000);
	}
	return daojishi;
})