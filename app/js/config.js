require.config({
	baseUrl: "/",
	paths: {
		"jquery": "libs/jquery-1.12.4",
		"template":"libs/template-web",
		"cookie":"libs/jquery.cookie",
		"lunbo":"module/lunbo",
		"daojishi":"module/daojishi",
		"xiangqing":"module/xiangqing",
		"register":"module/register",
		"login":"module/login",
		"lunbo1":"module/lunbo1"
		
		
		
		
		
	},
	shim: {
		header:{
			deps:["jquery"]
		},
		lunbo:{
			deps:["jquery"]
		},
		xiangqing:{
			deps:["jquery"]
		},
		login:{
			deps:["jquery"]
		},
		register:{
			deps:['jquery']
		},
		cookie:{
			deps:['jquery']
		},
		lunbo1:{
			deps:['jquery']
		}
	}
})