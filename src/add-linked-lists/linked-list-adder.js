'use strict';

var LinkedList = require('./../data-structures/linked-list');

function add(linkedList1, linkedList2){
    var result = new LinkedList();

    var carryOver = 0;
    var list1HasElements = true;
    var list2HasElements = true;
    var value1 = 0;
    var value2 = 0;

    while(list1HasElements || list2HasElements){

        if(list1HasElements){
            var element1 = linkedList1.pop();
            if(element1 !== null){
                value1 = element1.value;
            } else {
                list1HasElements = false;
                value1 = 0;
            }
        }

        if(list2HasElements) {
            var element2 = linkedList2.pop();
            if (element2 !== null) {
                value2 = element2.value;
            } else {
                list2HasElements = false;
                value2 = 0;
            }
        }

        var currentSum = value1 + value2 + carryOver;
        console.log(currentSum);
        if (currentSum >= 10){
            currentSum = currentSum - 10;
            result.add(currentSum);
            carryOver = 1;

        } else {
            result.add(currentSum);
            carryOver = 0;
        }
    }

    return result;
}

module.exports = add