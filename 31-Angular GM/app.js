angular.module('angularmaps', ['ngRoute', 'angularmaps.controllers'])

.config(['$routeProvider', function($routeProvider) {
	$routeProvider

	.when('/', {
	    templateUrl: 'views/home.html',
	    controller: 'HomeController'
	})
	.when('/maps', {
	    templateUrl: 'views/map.html',
	    controller: 'MapsController'
	})
	.otherwise({
	  	redirectTo: '/'
	});
}]);