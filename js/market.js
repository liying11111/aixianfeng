
//分页效果
app.controller("marketcontroller",function($scope,$http){
	$scope.url="热销榜";
	$scope.arr=[];
function paging(url){
	$http({
		url:"http://www.vrserver.applinzi.com/aixianfeng/apicategory.php?category="+$scope.url,
		mehtod:"get",
		data:"",
	}).success(function(data){
		console.log(data);
	$scope.arr=data.data;
	})
}
paging();
  $scope.sort1=function(){
  	$scope.url="热销榜";
  	paging();
  }
  
  $scope.sort2=function(){
  	$scope.url="天天特价";
  	paging();
  }
  
  $scope.sort3=function(){
  	$scope.url="优选水果";
  	paging();
  }
  
  $scope.sort4=function(){
  	$scope.url="牛奶面包";
  	paging();
  }


var bol=true;
	$(".mar_lik1").click(function(){
		console.log("11");
		if(bol){
			$(".mar_hide").css({display:"block"});	
			bol=false;
		}else{
			$(".mar_hide").css({display:"none"});
			bol=true;
		}
		
	})
	
	var bol2=true;
	$(".mar_lik2").click(function(){
		console.log("22");
		if(bol2){
			$(".mar_hide1").css({display:"block"});	
			bol2=false;
		}else{
			$(".mar_hide1").css({display:"none"});
			bol2=true;
		}
		
	})



//$(".mar_lik1").click(function(){
//	console.log("11111")
//	$(".mar_hide").css({"display":"block"})
//})

})

	