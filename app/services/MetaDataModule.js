/**
 * Created by galsc on 2/9/16.
 */
define (['angular'], function ()
{
    var metaModule = angular.module('MetaDataModule', []);
    metaModule.factory('MetaDataService',['$http', function($http)
    {
        //var _response;
        var service = {};

        service.getMetaData = function(username,password)
        {
            return $http({
                url: 'https://meta.etoro.com/V1.1/instruments?format=json',
                method:'GET'
            });
        }
        return service;
    }]);

    return metaModule;
});
