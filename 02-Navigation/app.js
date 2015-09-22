

angular.module('navigation', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
	$routeProvider

	.when('/', {
	    templateUrl: 'views/home.html'
	})
	.when('/products', {
	    templateUrl: 'views/products.html'
	})
	.otherwise({
	  	redirectTo: '/'
	});
}]);