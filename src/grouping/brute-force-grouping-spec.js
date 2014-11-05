'user strict';

var grouping = require('./brute-force-grouping');

describe('when grouping Xs', function () {

    it('should bring them next to each other', function () {
        var input = '....x..xx...x..';
        var result = grouping.minStepsToGroup(input);
        expect(result).toBe(5);
    });

});