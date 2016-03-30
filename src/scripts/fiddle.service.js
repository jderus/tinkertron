(function () {
    'use strict';

    angular
        .module('ttApp')
        .service('fiddleService', fiddleService);

    fiddleService.$inject = ['$http', '$resource', '$q'];

    function fiddleService($http, $resource, $q) {
        var service = {
            getData: getData,
            getPackageJson: getPackageJson,
            syntaxHighlightHtml: syntaxHighlightHtml
        };

        return service;
    
        function getData() {
            var url = "http://jsonplaceholder.typicode.com/posts";
            return $resource(url).query();
        }
    
        function getPackageJson() {
            var deferred = $q.defer();
            
            var fs = require('fs');
            var file = fs.readFile('./package.json', 'utf8', function(err, data) {
                if (err) { throw err;}
                console.log('pack');
                console.log(data);
                deferred.resolve(data);
            }); 
            return deferred.promise;        
        }
        
        //pike regex to highlight json syntax are return html
        function syntaxHighlightHtml(json) {
            json = json.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
            return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, function (match) {
                var cssClass = 'syntaxnumber';
                if (/^"/.test(match)) {
                    if (/:$/.test(match)) {
                        cssClass = 'syntaxkey';
                    } else {
                        cssClass = 'syntaxstring';
                    }
                } else if (/true|false/.test(match)) {
                    cssClass = 'syntaxboolean';
                } else if (/null/.test(match)) {
                    cssClass = 'syntaxnull';
                }
                return '<span class="' + cssClass + '">' + match + '</span>';
            });
        }
        
    }
})();