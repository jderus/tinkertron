(function () {
    'use strict';
    
    angular
        .module('ttApp')
        .directive('ttStatusbar', ttStatusbarDir);
    
    function ttStatusbarDir() {
        var directive = {
            link: link,
            scope: {
            },
            templateUrl: 'dirtemplates/statusbar.template.html',
            restrict: 'E'
        };
        return directive;
    }
    
    function link(scope, element, attrs) { 
        //todo if necessary
    }
        
})();;