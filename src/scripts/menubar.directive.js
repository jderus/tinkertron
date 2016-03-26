(function () {
    'use strict';
    
    angular
        .module('ttApp')
        .directive('ttMenubar', ttMenubarDir);
    
    function ttMenubarDir() {
        var directive = {
            link: link,
            templateUrl: 'dirtemplates/menubar.template.html',
            restrict: 'E'
        };
        return directive;
    }
    
    function link(scope, element, attrs) { 
        scope.boolChangeClass = true;
        
        scope.menubarClick = function () {
            //window.alert("Clicked!");
            scope.boolChangeClass = !scope.boolChangeClass;
            scope.$evalAsync();
        };
    }
    
    // function click(scope) {
    //     window.alert("Clicked!");
    //     scope.boolChangeClass = !scope.boolChangeClass;
    //     scope.$evalAsync();
    // };
    
})();;