'user strict';

function LinkedList() {
    this.head = null;
    this.length = 0;
}

LinkedList.prototype.add = function (value) {
    if (this.head === null) {
        this.head = {
            value: value,
            next: null
        };
    } else {
        var current = this.head;
        while(current.next !== null) {
            current = current.next;
        }
        current.next = {
            value: value,
            next: null
        };
    }
    this.length++;
};

LinkedList.prototype.pop = function () {
    if (this.head === null) {
        return null;
    }
    var oldHead = this.head;
    this.head = oldHead.next;
    oldHead.next = null;
    this.length--;
    return oldHead;
};

module.exports = LinkedList;
