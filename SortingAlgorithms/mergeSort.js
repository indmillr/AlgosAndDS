/* 
Given two sorted arrays, create a helper function that creates a new sorted array
and consists of all the elements in the two input arrays.
This should run in O(n+m) time and O(n+m) space and should not modify the passed parameters.
*/

/*
Create an empty array, considering the smallest values in each input array.
If the value in the first array is smaller than the value in the second array,
push the value in the first array into the results and move on to the next value in the first array.
If the value in the first array is larger than the value in the second array,
push the value in the second array into the results and move on to the next value in the second array.
*/

// func to merge two arrays, sorted
function merge(arr1, arr2) {
    let results = [];
    let i = 0;
    let j = 0;

    // if not at the end of either array, keep moving on both arrays
    while (i < arr1.length && j < arr2.length) {
        if (arr2[j] > arr1[i]) {
            results.push(arr1[i]);
            i++;
        }
        else {
            results.push(arr2[j]);
            j++;
        }
    }
    // if reached the end of arr2, keep moving on arr1
    while (i < arr1.length) {
        results.push(arr1[i]);
        i++;
    }
    // if reached the end of arr1, keep moving on arr2
    while (j < arr2.length) {
        results.push(arr2[j]);
        j++;
    }
    return results;
}

/*
Break up the array into halves until arrays are empty or have only one element.
Merge the smaller arrays back together until the full length is reached.
Once merged, return the merged sorted array.
*/

function mergeSort(arr) {
    // short-circuit an array too short to sort
    if (arr.length <= 1) return arr;
    // find the middle of the input array
    let mid = Math.floor(arr.length / 2);
    // create a new array of the left half of the input array and continue recursively until arrays are too small to split
    let left = mergeSort(arr.slice(0, mid));
    // create a new array of the right half of the input array and continue recursively until arrays are too small to split
    let right = mergeSort(arr.slice(mid));
    return merge(left, right);
}