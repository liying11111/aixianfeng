app.controller("resecontroller",function($scope,$http){
	$scope.arr=[];
	//购物车
	$scope.shopcarr=function(car){
		for(var i=0;i<carArr.length;i++){
			if(carArr[i].name==car.name){
//				console.log(carArr[i].num);
//				if(carArr[i].num==undefined){
//					carArr[i].num=1;
//				}
				carArr[i].num++;
				
//				console.log(carArr[i].num);
//				console.log(carArr);
				return;
			}
		}   
		console.log(carArr);
		car.num = 1;
		carArr.push(car);
	}
	$http({
		url:"http://www.vrserver.applinzi.com/aixianfeng/apiyuding.php",
		method:"get",
		data:"",
	}).success(function(data){
		$scope.arr=data.product;
//		console.log(data);
//		console.log($scope.arr);
	})
})
