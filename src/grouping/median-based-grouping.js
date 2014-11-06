'user strict';

//Unlike brute force algorithm this one first finds the median element
//and groups everything around it
function findMinShifts (input) {
    //find median
    var array = input.split('');
    var median = computeMedian(array);

    //find number of steps to group elements around that
    return computeStepsForGroupingElementsAround(median, array);
}

function computeMedian(array) {
    var xIndices = [];
    for (var index = 0; index < array.length; index++) {
        if (containsElementAt(index, array)) {
            xIndices.push(index);
        }
    }

    if (xIndices.length === 0) {
        return -1;
    }

    var medianIndex = -1;
    if (xIndices.length % 2 === 0) {
        medianIndex = xIndices.length / 2;
    } else {
        medianIndex = (xIndices + 1) / 2;
    }
    return xIndices[medianIndex];
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
    findMinShifts: findMinShifts
}