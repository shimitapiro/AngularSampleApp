/**
 * Created by galsc on 2/9/16.
 */
var loginModule = angular.module('loginModule', []);
loginModule.factory('login',['$http', function($http)
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
