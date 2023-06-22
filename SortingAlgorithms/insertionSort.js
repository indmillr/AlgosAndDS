// pick the second element in the array
// compare to the prior element, swap if necessary
// move to next element and if out of order, iterate through the sorted portion

function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let currentVal = arr[i];
        for (let j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
            arr[j + 1] = arr[j];
            }
            arr[j + 1] = currentVal;
        }
    return arr;
}