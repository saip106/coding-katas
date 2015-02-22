'use strict';

function merge(array) {
    var result = [];
    for (var i = 0; i < array.length; i++) {
        var linkedList = array[i];
        var head = linkedList.pop();
        while(head) {
            console.log(head);
            result.push(head.value);
            head = linkedList.pop();
        }

    }
    return result;
}

module.exports = {
    merge: merge
};