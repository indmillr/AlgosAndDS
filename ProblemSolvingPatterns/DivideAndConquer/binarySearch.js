// given a sorted array of ints, write a function that accepts a value and
// returns the index where the value passed to the function is located.
// if the value is not found, return -1

// naive solution (start from the left)
function search(arr, val) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === val) {
            return i;
        }
    }
    return -1;
}

// refactored solution
function search(arr, val) {
    let min = 0;
    let max = arr.length - 1;

    while (min <= max) {
        // divide the entire array in half
        let middle = Math.floor((min + max) / 2);
        let currentElement = arr[middle];

        if (arr[middle] < val) {
            min = middle + 1;
        }
        else if (arr[middle] > val) {
            max = middle - 1;
        }
        else {
            return middle;
        }
    }

    return -1;
}