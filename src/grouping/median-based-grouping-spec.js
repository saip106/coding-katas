'user strict';

var grouping = require('./median-based-grouping');

describe('Median Based Grouping', function () {


    describe('when grouping Xs', function () {

        it('should bring them next to each other', function () {
            var input = '....x..xx...x..';
            var result = grouping.findMinShifts(input);
            expect(result).toBe(5);
        });

    });

    describe('when grouping string with just one X', function () {

        it('should do no shifts to group', function () {
            var input = '....x.......';
            var result = grouping.findMinShifts(input);
            expect(result).toBe(0);
        });

    });

    describe('when grouping string with just already grouped Xs', function () {

        it('should do no shifts to group', function () {
            var input = '....xxxx.......';
            var result = grouping.findMinShifts(input);
            expect(result).toBe(0);
        });

    });

    describe('when grouping string with no Xs', function () {

        it('should do no shifts to group', function () {
            var input = '...........';
            var result = grouping.findMinShifts(input);
            expect(result).toBe(0);
        });

    });

});
