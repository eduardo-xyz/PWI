angular.module('angularmaps.controllers', ['uiGmapgoogle-maps'])

.controller('HomeController',function($scope){
	$scope.title = 'Hello World';
	$scope.promotions = [
		{name: 'Coca Cola', price: '$2'},
		{name: 'Pepsi', price: '$3'},
		{name: 'Redbull', price: '$4'}
	];

	$scope.add = function(){
		var newpromotion = angular.copy($scope.newpromotion);
		$scope.promotions.push(newpromotion);
	};
})

.controller('MapsController', function($scope){
	$scope.map = {
		center: {latitude: 45, longitude: -73},
		zoom: 8,
		markers: [],		
	};
});

