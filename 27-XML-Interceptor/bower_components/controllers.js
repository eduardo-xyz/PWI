angular.module('xml.controllers', ['xml.services'])

.controller('xmlcontroller', function($scope, $exchangerate){
  $scope.compra = $exchangerate.compra;
  $scope.venta = $exchangerate.venta;
});