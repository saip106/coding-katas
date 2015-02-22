'user strict';

var finder = require('./redundant-brace-finder');

xdescribe('when evaluating an expression with redundant braces', function () {

    it('should return true', function () {
        var result = finder.find('((a+b))');
        expect(result).toBeTruthy();
    });

});

xdescribe('when evaluating an expression without redundant braces', function () {

    it('should return true', function () {
        var result = finder.find('(a+b)*c');
        expect(result).toBeFalsy();
    });

});