'use strict';

var view2module = angular.module('myApp.view2', ['ngRoute']);


view2module.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });
}])

view1module.factory('meta',['$http','$location', function($http,$location)
{
  //var _response;
  var service = {};

  service.metaData = {};
  service.getMetaData = function()
  {
    return $http({
      method: 'GET',
      url: 'https://meta.etoro.com/V1.1/instruments?format=json'
    })
  }

  return service;
}]);

view2module.controller('View2Ctrl', function($scope,  meta) {

  meta.getMetaData().then(function successCallback(response) {
    console.log(response.length);

    $scope.metaData  = response.data.InstrumentDisplayDatas;

  }, function errorCallback(response) {
      console.log('errro meta data');
  });

});