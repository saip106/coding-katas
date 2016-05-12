'use strict';

var MinHeap = require('./min-heap');
var LinkedList = require('./linked-list');

describe('Min Heap', function () {

    describe('when creating empty min heap', function () {
        var heap;
        beforeEach(function () {
            heap = new MinHeap();
        });

        it('should be defined', function () {
            expect(heap).toBeDefined();
        });

        it('should be valid', function () {
            expect(heap.isValid()).toBe(true);
        });
    });

    describe('when adding one element to an empty heap', function () {
        var heap;
        beforeEach(function () {
            heap = new MinHeap();
            var linkedList = new LinkedList();
            linkedList.add(123);
            heap.add(linkedList);
        });

        it('should have one element', function () {
            expect(heap.count()).toBe(1);
        });

        it('should be valid', function () {
            expect(heap.isValid()).toBe(true);
        });
    });

    describe('when adding three elements to an empty heap', function () {
        var heap;
        beforeEach(function () {
            heap = new MinHeap();

            var linkedList1 = new LinkedList();
            linkedList1.add(3);
            var linkedList2 = new LinkedList();
            linkedList2.add(2);
            var linkedList3 = new LinkedList();
            linkedList3.add(1);

            heap.add(linkedList1);
            heap.add(linkedList2);
            heap.add(linkedList3);
        });

        it('should have 3 elements', function () {
            expect(heap.count()).toBe(3);
        });

        it('should be valid', function () {
            expect(heap.isValid()).toBe(true);
        });
    });

    describe('when adding three linked lists to an empty heap', function () {
        var heap;
        beforeEach(function () {
            heap = new MinHeap();

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

            heap.add(linkedList1);
            heap.add(linkedList2);
            heap.add(linkedList3);
        });

        it('should have three elements', function () {
            expect(heap.count()).toBe(3);
        });

        it('should be valid', function () {
            expect(heap.isValid()).toBe(true);
        });

        describe('when the min element is popped', function () {
            var poppedElement;
            beforeEach(function () {
                poppedElement = heap.pop();
            });

            it('should pop the linked list head value of min element', function () {
                expect(poppedElement).toBe(1);
            });

            it('should adjust root to next element in linked list', function () {
                expect(heap.root().value).toBe(2);
            });

            it('should still have a valid min heap', function () {
                expect(heap.isValid()).toBe(true);
            });
        });
    });


});