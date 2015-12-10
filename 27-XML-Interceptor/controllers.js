angular.module('xmlinterceptor.controllers', [])

.controller('xmlcontroller', function($scope, $exchangerate){
  $scope.compra = 0;
  $scope.venta = 0;

  $scope.refresh = function(){
    $exchangerate.get('compra').then(function(value){
      $scope.compra = value;
      $exchangerate.get('venta').then(function(value){
        $scope.venta = value;
        // Angular Patch;
        $scope.$apply();
      });
    });        
  };
});