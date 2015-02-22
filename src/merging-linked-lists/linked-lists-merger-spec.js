'use strict';

var merger = require('./linked-lists-merger');
var LinkedList = require('./linked-list');

describe('when merging one linked list with one element', function () {

    it('should return a sorted array', function () {
        var linkedList = new LinkedList();
        linkedList.add(1);

        var input = [];
        input.push(linkedList);
        var result = merger.merge(input);
        expect(result.length).toBe(1);
        expect(result[0]).toBe(1);
    });

});

describe('when merging one sorted linked list', function () {

    it('should return a sorted array', function () {
        var linkedList = new LinkedList();
        linkedList.add(1);
        linkedList.add(2);
        linkedList.add(3);

        var input = [];
        input.push(linkedList);
        var result = merger.merge(input);
        expect(result.length).toBe(3);
        expect(result[0]).toBe(1);
        expect(result[1]).toBe(2);
        expect(result[2]).toBe(3);
    });

});

describe('when merging multiple sorted linked lists', function () {

    it('should return a sorted array', function () {
        var linkedList1 = new LinkedList();
        linkedList1.add(1);
        linkedList1.add(3);
        linkedList1.add(5);

        var linkedList2 = new LinkedList();
        linkedList2.add(2);
        linkedList2.add(4);
        linkedList2.add(6);
        linkedList2.add(10);
        linkedList2.add(20);
        linkedList2.add(30);

        var linkedList3 = new LinkedList();
        linkedList3.add(11);
        linkedList3.add(12);
        linkedList3.add(23);

        var input = [];
        input.push(linkedList1);
        input.push(linkedList2);
        input.push(linkedList3);

        var result = merger.merge(input);

        expect(result.length).toBe(12);
        expect(result[0]).toBe(1);
        expect(result[1]).toBe(2);
        expect(result[2]).toBe(3);
        expect(result[3]).toBe(4);
        expect(result[4]).toBe(5);
        expect(result[5]).toBe(6);
        expect(result[6]).toBe(10);
        expect(result[7]).toBe(11);
        expect(result[8]).toBe(12);
        expect(result[9]).toBe(20);
        expect(result[10]).toBe(23);
        expect(result[11]).toBe(30);
    });

});