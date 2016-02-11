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
        'angular-route': ['angular']
    }
});


require(['angular', 'angular-route','app', 'loginModule', 'view1'], function() {
    angular.element(document).ready(function() {
        angular.bootstrap(document, ['app']);
    });

 //angular.bootstrap(document, ['app']);
});