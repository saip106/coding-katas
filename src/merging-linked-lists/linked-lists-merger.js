'use strict';

var MinHeap = require('./min-heap');

function merge(array) {
    var result = [], minHeap = new MinHeap();
    for (var i = 0; i < array.length; i++) {
        var linkedList = array[i];
        minHeap.add(linkedList);
    }

    while(!minHeap.isEmpty()) {
        var poppedValue = minHeap.pop();
        result.push(poppedValue);
    }
    return result;
}

module.exports = {
    merge: merge
};