'user strict';

var grouping = require('./brute-force-grouping');

describe('when grouping Xs', function () {

    it('should bring them next to each other', function () {
        var input = '....x..xx...x..';
        var result = grouping.minStepsToGroup(input);
        expect(result).toBe(5);
    });

});

describe('when grouping string with just one X', function () {

    it('should do no shifts to group', function () {
        var input = '....x.......';
        var result = grouping.minStepsToGroup(input);
        expect(result).toBe(0);
    });

});

describe('when grouping string with just already grouped Xs', function () {

    it('should do no shifts to group', function () {
        var input = '....xxxx.......';
        var result = grouping.minStepsToGroup(input);
        expect(result).toBe(0);
    });

});