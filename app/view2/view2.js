/**
 * Created by shimita on 2/11/2016.
 */
define([],function(){
    'use strict';

    var view2module = angular.module('view2', ['ngRoute','MetaDataModule']);


    view2module.config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/view2', {
            templateUrl: 'view2/view2.html',
            controller: 'View2Ctrl'
        });
    }])



    view2module.controller('View2Ctrl', function($scope,  MetaDataService) {
        $scope.isLoading = true;
        MetaDataService.getMetaData().then(function successCallback(response) {
            console.log(response.length);

            $scope.metaData  = response.data.InstrumentDisplayDatas;

            $scope.isLoading = false;


        }, function errorCallback(response) {
            console.log('errro meta data');
        });

    });
    return view2module;
});
