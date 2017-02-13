var app=angular.module("myapp",['ngRoute']);
  //配置模块化
	app.config(["$routeProvider",function($routeProvider){
		$routeProvider
		.when("/",{templateUrl:"html/home.html",controller:"homecontroller"})
		//二级页面
	    .when("/crazy",{templateUrl:"html2/crazy.html",controller:"crazycontroller"})
	    
		.when("/market",{templateUrl:"html/supermarket.html",controller:"marketcontroller"})
		.when("/rare",{templateUrl:"html/reserve.html",controller:"resecontroller"})
		.when("/shopCar",{templateUrl:"html/shopCar.html",controller:"shopcontroller"})
		.when("/mine",{templateUrl:"html/mine.html"})
		.otherwise({redirectTo:"/"});
	}]);
	
	app.controller("myTab",function($scope){
		
		$scope.count=carArr;
		
		$scope.arr=[{cla:"footer_img1-1",title:"首页",index:"0",href:"#/"},
		            {cla:"footer_img2",title:"闪送超市",index:"1",href:"#/market"},
		            {cla:"footer_img3",title:"新鲜预定",index:"2",href:"#/rare"},
					{cla:"footer_img4",title:"购物车",index:"3",href:"#/shopCar"},
					{cla:"footer_img5",title:"我的",index:"4",href:"#/mine"}]
				$scope.clik=function(index){
//			     console.log(index);
					for(var i=0;i<$scope.arr.length;i++){
						$scope.arr[i].cla="footer_img"+(i+1);
					}
					
						$scope.arr[index].cla=$scope.arr[index].cla+"-1";
					
				}
				
				
				
				//购物车
				$scope.Divdriment="";
	})