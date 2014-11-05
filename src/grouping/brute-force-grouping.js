'user strict';

//find the steps required to group all x's around each x
//whichever yields the min steps is the answer

function minStepsToGroup (input) {
    var array = input.split('');
    var totalJumps = [];

    for (var i = 0; i < array.length; i++) {
        if (containsElementAt(i, array)) {
            totalJumps[i] = computeStepsForGroupingElementsAround(i, array);
        }
    }

    var min = totalJumps.length;
    for (var i = 0; i < totalJumps.length; i++) {
        if (totalJumps[i]) {
            if (totalJumps[i] < min) {
                min = totalJumps[i]
            }
        }
    }
    return min;
}

function computeStepsForGroupingElementsAround(index, array) {
    var start = index, end = index, steps = 0;
    for (var i = index; i >= 0 ; i--) {
        if (containsElementAt(i, array)) {
            start = i;
        } else {
            break;
        }
    }

    for (var i = index; i <= array.length - 1 ; i++) {
        if (containsElementAt(i, array)) {
            end = i;
        } else {
            break;
        }
    }

    for (var i = 0; i < array.length; i++) {
        if (containsElementAt(i, array)) {
            if (i < start) {
                steps += start - 1 - i;
                start--;
            }
            if (i > end) {
                steps += i - end - 1;
                end++;
            }
        }
    }
    return steps;
}

function containsElementAt (index, array) {
    return array[index] === 'X' || array[index] === 'x';
}

module.exports = {
    minStepsToGroup: minStepsToGroup
}
