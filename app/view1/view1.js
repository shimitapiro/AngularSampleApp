'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope', function($scope) {
  $scope.UserName = '';
  $scope.Password = '';
  $scope.submit = function() {
    window.alert("hi!");
    if ($scope.text && $scope.Password) {
      $window.alert("Hello " + $scope.UserName);
    }else {
      $window.alert("Missing Details ");
    }
  };

}]);