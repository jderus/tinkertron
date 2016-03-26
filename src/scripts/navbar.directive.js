(function () {
    'use strict';
    
    angular
        .module('ttApp')
        .directive('ttNavbar', ttNavbarDir);
    
    function ttNavbarDir() {
        var directive = {
            link: link,
            templateUrl: 'dirtemplates/navbar.template.html',
            restrict: 'E'
        };
        return directive;
    }
    
    function link(scope, element, attrs) { 
        scope.navbarClick = click;
    }
    
    function click() {
        window.alert("Clicked!");
    };
    
})();;