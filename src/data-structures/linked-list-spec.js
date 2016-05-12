'use strict';

var LinkedList = require('./linked-list');

describe('Linked List', function () {

    it('should be able to create empty linked list', function () {
        var linkedList = new LinkedList();
        expect(linkedList).toBeDefined();
        expect(linkedList.head).toBe(null);
    });

});

