(function () {
    'use strict';
    
    angular.module('ttApp')
    .directive('shrink', function ($window) {
        return function(scope, element, attrs) {
            angular.element($window).bind("scroll", function() {
            if (this.pageYOffset >= 70) {
                scope.scrollDown = true;
            } else {
                scope.scrollDown = false;
            }
            scope.$apply();
            });
        };
    });
})();;