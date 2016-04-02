(function () {
    'use strict';
    
    angular
        .module('ttApp')
        .directive('ttCheckcard', ttCheckcardDir);
    
    function ttCheckcardDir() {
        var directive = {
            link: link,
            scope: {
                name: '@',
                text: '@',
                icon: '@',
            },
            templateUrl: 'dirtemplates/checkcard.template.html',
            restrict: 'E'
        };
        return directive;
    }
    
    function link(scope, element, attrs) { 
        if (scope.name == null) scope.name = "Beep";
        if (scope.text == null) scope.text = "Boop";
        if (scope.icon == null) scope.icon = "icon";
    }
        
})();;