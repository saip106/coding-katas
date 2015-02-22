'use strict';

function MinHeap() {
    this.data = [];
}

MinHeap.prototype.root = function () {
    return this.data.length === 0 ? null : this.data[0].head ;
}

MinHeap.prototype.count = function () {
    return this.data.length;
};

MinHeap.prototype.add = function (linkedList) {
    this.data.push(linkedList);
    makeHeapValidOnAdd(this.data);
};

MinHeap.prototype.isValid = function () {
    var size = this.data.length;
    if (size === 0 || size === 1) {
        return true;
    }
    return isValid(0, this.data);
};

MinHeap.prototype.pop = function () {
    if (this.data.length === 0) {
        return null;
    }
    var rootLinkedList = this.data[0];
    var poppedElement = rootLinkedList.pop();
    makeHeapValidOnPop(this.data);
    return poppedElement.value;
};

function isValid(index, data) {
    var current = data[index].head;
    var left = getLeftChild(index, data);
    var right = getRightChild(index, data);

    var isLeftValid = true;
    if (left !== null) {
        isLeftValid = left.element.value > current.value && isValid(left.index, data);
    }

    var isRightValid = true;
    if (right !== null) {
        isRightValid = right.element.value > current.value && isValid(right.index, data);
    }
    return isLeftValid && isRightValid;
}

function getLeftChild(index, data) {
    var leftIndex = 2 * index + 1;
    if (leftIndex < data.length) {
        return {
            element: data[leftIndex].head,
            index: leftIndex
        };
    }
    return null;
}

function getRightChild(index, data) {
    var rightIndex = 2 * index + 2;
    if (rightIndex < data.length) {
        return {
            element: data[rightIndex].head,
            index: rightIndex
        };
    }
    return null;
}

function getParent(index, data) {
    if (index === 0) {
        return null;
    }
    var parentIndex = Math.floor((index - 1) / 2);
    return {
        index: parentIndex,
        element: data[parentIndex].head
    };
}

function makeHeapValidOnAdd(data) {
    if (data.length <= 1) {
        return;
    }
    internalMakeHeapValidOnAdd(data.length - 1, data);
}

function internalMakeHeapValidOnAdd(index, data) {
    var current = data[index].head;
    var parent = getParent(index, data);
    if (parent === null || parent.element.value < current.value) {
        return;
    }
    var temp = data[parent.index];
    data[parent.index] = data[index];
    data[index] = temp;
    internalMakeHeapValidOnAdd(parent.index, data);
}

function makeHeapValidOnPop(data) {
    if (data.length <= 1) {
        return;
    }
    internalMakeHeapValidOnPop(0, data);
}

function internalMakeHeapValidOnPop(index, data) {
    var current = data[index].head;
    var leftChild = getLeftChild(index, data);
    var rightChild = getRightChild(index, data);

    if (leftChild !== null || rightChild !== null) {
        var minChild = findMin(leftChild, rightChild);
        var temp = data[minChild.index];
        data[minChild.index] = data[index];
        data[index] = temp;
        internalMakeHeapValidOnPop(minChild.index, data);
    }
}

function findMin(left, right) {
    if (left === null) {
        return right;
    }
    if (right === null) {
        return left;
    }
    if (left.element.value < right.element.value) {
        return left;
    } else  {
        return right;
    }
}

module.exports = MinHeap;