'use strict';
define (['angular', 'angular-route'],function () {

  var view1module = angular.module('view1', ['ngRoute', 'loginModule']);

  view1module.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/view1', {
      templateUrl: 'view1/view1.html',
      controller: 'View1Ctrl'
    });
  }]);


  view1module.controller('View1Ctrl', function($scope, login) {
    $scope.UserName = '';
    $scope.Password = '';
    $scope.submit = function () {
      login.getToken($scope.UserName, $scope.Password);
    };
  });

  return view1module;
});



