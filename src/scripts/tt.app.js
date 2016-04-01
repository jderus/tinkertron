(function () {
    'use strict';

    var app = angular.module('ttApp', ['ngRoute', 'ngResource' , 'ui.bootstrap'])
        .config(function ($routeProvider, $locationProvider) {

            $routeProvider.when('/', {
                templateUrl: 'mainview.html'
            });

            $routeProvider.otherwise({
                redirectTo: "/"
            });
        });
 })();;