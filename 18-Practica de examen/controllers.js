var controllers = angular.module("chatApp.controllers", []);

controllers.controller('chatController', function($scope, $message){
  
  $scope.messages = $message.all;

  $scope.send = function(message){
    $message.create(message);
  };
});