// a function that takes an array and a value
// loop the array and check if the current arr element is equal to the value
// return the index at which the element is found. If not found, return -1

function linearSearch(arr, val) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === val) {
            return i;
        }
    }
    return -1;
}