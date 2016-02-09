'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope', '$http', function($scope, $http) {
  $scope.UserName = '';
  $scope.Password = '';
  $scope.submit = function() {
    $http({
        url:'https://sts.etoro.com/api/v2/login',
      method:'POST',
      headers: {'AccountType': 'Real',
                'applicationVersion': '1',
                'applicationIdentifier': 'iOSOpenBook',
                'Content-Type': 'application/json'
                },
      data: {
        Password: $scope.Password,
        UserLoginIdentifier: $scope.UserName,
        Username: $scope.UserName
      }
    }).then(function successCallback(response) {

        console.log(response.toString());
      // this callback will be called asynchronously
      // when the response is available
    }, function errorCallback(response) {
      console.log('errro sts');

      // called asynchronously if an error occurs
      // or server returns response with an error status.
    });

    if ($scope.text && $scope.Password) {
      $window.alert("Hello " + $scope.UserName);
    }else {
      $window.alert("Missing Details ");
    }
  };

}]);