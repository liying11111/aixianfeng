//app.controller('homecontroller', function($scope){
//		// console.log('fs');
//		$scope.homeBtn = function () {
//			console.log('返回');
//		}
//	});
//	
	//大图轮播
app.controller("homecontroller",function($scope,$http){
//	$scope.homeBtn = function () {
//			console.log('返回');
//	}
	$scope.arr=[];
	$http({
		url:"http://www.vrserver.applinzi.com/aixianfeng/apihome.php",
		method:"get",
		data: '',
	}).success(function(data){
		$scope.arr = data.data.slide;
		console.log(data.data.slide);
		$scope.arr.push(data.data.slide[0]);
		$scope.arr3=data.data.menu;
		console.log(data.data.menu);	
	})
	
	
})

      //滚动
		var index=0;
		setInterval(function(){
		index--;
			if(index<=-6){
				setTimeout(function(){
	          index=0;
	          $(".carousel_juan").css({transform:"translateX("+index*14.285+"%)"});
	          $(".carousel_juan").css({transition:"transform 0s ease"});
	      	    },600)
		    }
	   $(".carousel_juan").css({transform:"translateX("+index*14.285+"%)"});
       $(".carousel_juan").css({transition:"transform 0.3s ease"});
       
       $(".carousel_list li").css({background:"#ccc"});
      $($(".carousel_list li")[-index-1]).css({background:"purple"});
	   },2000)