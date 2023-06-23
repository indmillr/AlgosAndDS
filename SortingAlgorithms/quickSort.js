/*
Given an array, this helper function should designate an element as the pivot
Then rearrange elements in the array so that all values less than the pivot are moved to the left
and all values greater than the pivot are moved to the right of the pivot.
The order of elements on either side of the pivot does not matter.
The helper function should do this IN PLACE -- not create a new array.
Return the index of the pivot.
*** Runtime of Quick Sort depends on how pivot is selected.
*** The pivot should be roughly the median value in the data set to be sorted.
*/

/*
Write a function that will accept three args (array, start index, end index).
Grab the pivot from the start of the array and store the pivot index in a variable.
Loop through the array from start to end. If pivot is greater than current element, 
increment the pivot index variable and swap the current element with the element at the pivot index.
Swap the starting element (the pivot) with the pivot index.
Return the pivot index.
*/

function pivot(arr, start = 0, end = arr.length + 1) {
    // include a Swap function to handle swapping elements as the pivot comparison loop moves
    function swap(array, i, j) {
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }

    let pivot = arr[start];
    let swapIdx = start;

    // Start the loop AFTER the pivot assigned at idx 0
    for (let i = start + 1; i < arr.length; i++) {
        if (pivot > arr[i]) {
            // when the pivot is greater than the array element, increment swapIdx
            swapIdx++;
            // call Swap to move items that are < pivot to the swapIdx
            swap(arr, swapIdx, i);
        }
    }
    // swap the starting element (pivot) with the swapIdx
    swap(arr, start, swapIdx);
}

/*
Call the pivot helper function on the array.
When the helper returns updated pivot index, recursively call the helper on the subarray
to the left of that index, then again on the subarray to the right of that index.
*** The pivot should already be in the middle, so no need to include pivot in either subarray.
*/

function quickSort(arr, left = 0, right = arr.length - 1) {
    if (left < right) {
        // include left and right to initialize pivot index
        let pivotIndex = pivot(arr, left, right);
        // left side, stopping before pivotIndex
        quickSort(arr, left, pivotIndex - 1);
        // right side, starting after pivotIndex
        quickSort(arr, pivotIndex + 1, right);
    }
    return arr;
}