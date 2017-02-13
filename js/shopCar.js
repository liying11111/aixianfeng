app.controller("shopcontroller",function($scope,$http){
	$scope.homeBtn = function () {
			console.log('返回');
	}
	
//	$scope.arr=[];
console.log("lylyly");

 $scope.arr=carArr;
 $scope.prc=0;
	$scope.jia=function(bbb){
		for(var i=0; i<$scope.arr.length;i++){
			if(bbb==$scope.arr[i]){
				if($scope.arr[i].num<=1){
					return;
				}	
					$scope.arr[i].num--;
			}
		}
		counttt();
	}
	
  
	$scope.jian = function(bbb) {		
		for(var i = 0; i < $scope.arr.length;i++){
			if(bbb == $scope.arr[i]){
				console.log(carArr)
				$scope.arr[i].num++;
				console.log($scope.arr[i])
			}
			
		}
		counttt();	
	}

//封装函数
function counttt(){
	$scope.prc = 0;
	for(var i = 0; i < $scope.arr.length;i++){
		$scope.prc = $scope.prc + parseFloat($scope.arr[i].price) * $scope.arr[i].num;
	}
	$scope.prc =parseFloat($scope.prc).toFixed(2);
}
   counttt();
 
})


