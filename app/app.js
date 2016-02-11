//'use strict';
define ([], function () {
  var myApp = angular.module('app', ['ngRoute']);
  myApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider.otherwise({redirectTo: '/view1'});
  }]);


  myApp.controller('PhoneListCtrl', function ($scope) {
    $scope.gal = 'gal is the king';
  });


  return myApp;
});
