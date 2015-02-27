'use strict';

var finder = require('./max-brace-depth-finder');

describe('max brace depth finder', function () {

    it('should find max depth for an empty string', function () {
        var result = finder.find('');
        expect(result).toBe(0);
    });

});