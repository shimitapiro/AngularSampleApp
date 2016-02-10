'use strict';

var view2module = angular.module('myApp.view2', ['ngRoute'])


.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });
}])

    .factory('MetaData',['$scope','$http',function($scope,$http){
      $http({
        url:'https://meta.etoro.com/V1.1/instruments?format=json',
        method:'GET',
        headers: {'AccountType': 'Real',
          'applicationVersion': '1',
          'applicationIdentifier': 'iOSOpenBook',
          'Content-Type': 'application/json'
        },
      }).then(function successCallback(response) {
        if (response){
          console.log(response.length);
          $scope.metaData =  response;
        }else {
          console.log('errro meta data');
        }

      }, function errorCallback(response) {
        console.log('errro meta data');
      });
    }])
.controller('View2Ctrl', [function() {

}]);