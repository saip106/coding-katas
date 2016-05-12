'use strict';

var add = require('./linked-list-adder');
var LinkedList = require('./../data-structures/linked-list');

describe('Add Two equal length Linked Lists', function () {

    it('should add two linked lists', function () {
        var linkedList1 = new LinkedList();
        linkedList1.add(5);
        linkedList1.add(6);
        linkedList1.add(3);

        var linkedList2 = new LinkedList();
        linkedList2.add(8);
        linkedList2.add(4);
        linkedList2.add(2);

        var result = add(linkedList1, linkedList2);
        expect(result.pop().value).toBe(3);
        expect(result.pop().value).toBe(1);
        expect(result.pop().value).toBe(6);
    });
});

describe('Add Two non-equal length Linked Lists', function () {

    it('should add two linked lists', function () {
        var linkedList1 = new LinkedList();
        linkedList1.add(7);
        linkedList1.add(5);
        linkedList1.add(9);
        linkedList1.add(4);
        linkedList1.add(6);

        var linkedList2 = new LinkedList();
        linkedList2.add(8);
        linkedList2.add(4);

        var result = add(linkedList1, linkedList2);
        expect(result.pop().value).toBe(5);
        expect(result.pop().value).toBe(0);
        expect(result.pop().value).toBe(0);
        expect(result.pop().value).toBe(5);
        expect(result.pop().value).toBe(6);
    });
});

