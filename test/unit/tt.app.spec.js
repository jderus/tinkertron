'use strict';

describe('tinkertron app', function () {
    //var scope, $controllerConstructor, mockEventData;
    var _module;

    beforeEach(function(){
        _module = angular.module('ttApp') 
    });

    it("should be registered", function () {
        expect(_module).not.toBe(null);
    });
    
    describe('dependencies', function () {
        var deps;
        var hasModule = function (mod) { return deps.indexOf(mod) >= 0; }

        beforeEach(function () {
            deps = _module.value('ttApp').requires;
        });
        
        it('should have ngRoute as a dependency', function () {
            expect(hasModule('ngRoute')).toBe(true);
        });
        
        it('should have ngResource as a dependency', function () {
            expect(hasModule('ngResource')).toBe(true);
        });
        
        it('should have sand.widgets as a dependency', function () {
            expect(hasModule('ui.bootstrap')).toBe(true);
        });
        
    });
});