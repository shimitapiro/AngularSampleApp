require.config({
    paths: {
        'angular': 'bower_components/angular/angular',
        'angular-route': 'bower_components/angular-route/angular-route',
        'app': 'app',
        'view1': 'view1/view1',
        'loginModule': 'loginModule'
    },

    shim: {
        'angular' : {'exports' : 'angular'},
        'angular-route': ['angular'],
        'app' : {
            deps: ['angular-route', 'view1']
        },
        'view1' : {
            deps : ['angular-route', 'loginModule']
        }


    }


});


require(['app'], function() {
    angular.element(document).ready(function() {
        angular.bootstrap(document, ['view1', 'app']);
    });
});