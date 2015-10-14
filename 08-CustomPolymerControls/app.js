angular.module('custompolymer', ['ngRoute', 'custompolymer.controllers'])

.config(['$routeProvider', function($routeProvider) {
	$routeProvider

	.when('/', {
	    templateUrl: 'views/home.html',
	    controller: 'HomeController'
	})
	.when('/simpleelement', {
	    templateUrl: 'views/simpleelement.html'
	})
	.otherwise({
	  	redirectTo: '/'
	});
}]);