/**
 * Created by galsc on 2/9/16.
 */
var loginModule = angular.module('loginModule', []);
/*
loginModule.factory('LoginService', ['$http', function($http)
{
    var _response;
    var service = {};

    service.getToken = function(){
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
            _response = response;
            console.log(response.toString());
        }, function errorCallback(response) {
            console.log('errro sts');
        });
    }
    return service;

}]);*/

