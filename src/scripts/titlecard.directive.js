(function () {
    'use strict';
    
    angular
        .module('ttApp')
        .directive('ttTitlecard', ttTitlecardDir);
    
    function ttTitlecardDir() {
        var directive = {
            link: link,
            templateUrl: 'dirtemplates/titlecard.template.html',
            restrict: 'E'
        };
        return directive;
    }
    
    function link(scope, element, attrs) { 
        if (scope.title == null) scope.title = "Title";
        if (scope.subtext == null) scope.subtext = "Subtext in here."

    }
        
})();;