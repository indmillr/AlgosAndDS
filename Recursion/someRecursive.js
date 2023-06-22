// write a function that accepts an array and a callback
// return true if a single value in the array returns true when passed to the callback
// otherwise return false

function someRecursive(arr, callback) {
    if (arr.length === 0) return false;
    if (callback(arr[0])) return true;
    return someRecursive(arr.slice(1), callback);
}
