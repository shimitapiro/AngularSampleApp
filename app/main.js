require.config({
    paths: {
        'angular': 'bower_components/angular/angular',
        'angular-route': 'bower_components/angular-route/angular-route',
        'app': 'app',
        'view1': 'view1/view1',
        'view2': 'view2/view2',
        'loginModule': 'services/loginModule',
        'MetaDataModule': 'services/MetaDataModule'
    },

    shim: {
        'angular' : {'exports' : 'angular'},
        'angular-route': ['angular'],
        'app' : {
            deps: ['angular-route', 'view1','view2']
        },
        'view1' : {
            deps : ['angular-route', 'loginModule']
        },
        'view2' : {
            deps : ['angular-route', 'MetaDataModule','view1']
        }


    }


});


require(['app'], function() {
    angular.element(document).ready(function() {
        angular.bootstrap(document, ['view1', 'view2', 'app']);
    });
});