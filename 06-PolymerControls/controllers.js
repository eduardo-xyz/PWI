angular.module('polymer.controllers', [])

.controller('HomeController', ['$scope' ,function($scope){
	
}])

.controller('ProductsController', [function(){

}])

.controller('VideosController', ['$scope', function($scope){
	var video = document.querySelector("video");

	$scope.play = function(){
		video.play();
	};

	$scope.pause = function(){
		video.pause();
	};
}]);

