// DIVIDE AND CONQUER Search

// write a function that accepts a sorted array
// create a left pointer at the start and a right pointer at the end
// while the left pointer is before the right pointer, select the middle position
// if value is found, return the index
// if value is too small, move left pointer up
// if value is too large, move right pointer down
// if value is not found, return -1

function binarySearch(arr, val) {
    let start = 0;
    let end = arr.length - 1;
    let middle = Math.floor((start + end) / 2);

    while (arr[middle] !== val && start <= end) {
        if (val < arr[middle]) {
            end = middle - 1;
        }
        else {
            start = middle + 1;
        }
        middle = Math.floor((start + end) / 2);
    }

    if (arr[middle] == val) {
        return middle;
    } else {
        return -1
    }
}

// condensed:
function binarySearch(arr, val) {
    let start = 0;
    let end = arr.length - 1;
    let middle = Math.floor((start + end) / 2);
    while (arr[middle] !== val && start <= end) {
        if (val < arr[middle]) end = middle - 1;
        else start = middle + 1;
        middle = Math.floor((start + end) / 2);
    }
    return arr[middle] === val ? middle : -1;
}