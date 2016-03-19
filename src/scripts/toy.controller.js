(function () {
    'use strict';

    angular.module('ttApp')
           .controller('toyController', toyController);

    toyController.$inject = ['$scope', '$location', '$filter', $sce, 'fiddleService'];

    function toyController($scope, $location, $filter, $sce, fiddleService) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = null;
        vm.text = null;
        vm.fakedata = [];
        
        vm.packdata = null;
        
        // grid functionality default.
        $scope.sortType    = 'id';
        $scope.sortReverse = false;
        $scope.searchGrid  = '';

        activate();

        function activate() {
            vm.title = "Sandbox some text:";
            fiddleService.getData().$promise.then(
                function (value) { 
                    vm.fakedata = value;
                    console.log("done"); 
                },
                function (error) { console.error('epic fail. :('); }
            );
            
            fiddleService.getPackageJson().then(
                function (value) { 
                    var json = JSON.stringify(JSON.parse(value), null, 2);
                    vm.packdata = $sce.trustAsHtml(fiddleService.syntaxHighlightHtml(json)) ;
                    console.log("done"); 
                },
                function (error) { console.error('epic fail. :('); }
            );
            
        }
    }
})();