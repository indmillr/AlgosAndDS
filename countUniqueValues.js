// implemennt a function which accepts a sorted array and counts the unique values in the array
// negatives can exist, but will always be sorted

function countUniqueValues(arr) {
    // short-circuit if arr is empty
    if (arr.length === 0) return 0;
    let i = 0;
    for (let j = 1; j < arr.length; j++) {
        // if i and j don't match, increment i to add a unique value
        if (arr[i] !== arr[j]) {
            i++;
            // set i to current value of j to avoid double-counting unique values
            arr[i] = arr[j];
        }
    }
    return i + 1;
}