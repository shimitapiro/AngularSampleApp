'use strict';

var view1module = angular.module('myApp.view1', ['ngRoute']);

view1module.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}]);

view1module.factory('login',['$http', function($http)
{
  //var _response;
      var service = {};

  service.getToken = function(username,password)
  {
        $http({
          url:'https://sts.etoro.com/api/v2/login',
          method:'POST',
          headers: {'AccountType': 'Real',
            'applicationVersion': '1',
            'applicationIdentifier': 'iOSOpenBook',
            'Content-Type': 'application/json'
          },
          data: {
            Password: password,
            UserLoginIdentifier: username,
            Username: username
          }
        }).then(function successCallback(response) {
          console.log(response.data.accessToken);
        }, function errorCallback(response) {
          console.log('errro sts');
        });
  }
  return service;
}]);

view1module.controller('View1Ctrl', function($scope, login) {
  $scope.UserName = '';
  $scope.Password = '';
  $scope.submit = function () {
    login.getToken($scope.UserName, $scope.Password);
  };
});



