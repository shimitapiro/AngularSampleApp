//'use strict';
define (['angular', 'angular-route', 'view1'], function () {
  var myApp = angular.module('app', ['ngRoute']);
  myApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider.otherwise({redirectTo: '/view1'});
  }]);

  return myApp;
});
