angular.module('bootstrap.controllers', [])

.controller('HomeController', ['$scope' ,function($scope){
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
}])

.controller('ProductsController', [function(){

}]);

