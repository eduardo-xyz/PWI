var myApp = angular.module('xmlinterceptor', ['xmlinterceptor.controllers', 'xmlinterceptor.services', 'xml']);

myApp.config(['$httpProvider', function($httpProvider){
  $httpProvider.interceptors.push('xmlHttpInterceptor');
}]);