// write a function which accepts an array of integers and a number (n)
// calculate the maximum sum of (n) consecutive elements in the array

// create a 'window' that can either be an array or number from one position to another
// depending on certain conditions, the window increases or closes (and a new window is created)
// useful for keeping track of a subset of data in an array/string/etc.

// naive solution
function maxSubarraySum(arr, num) {
    // short-circuit if num is bigger than arr length
    if ( num > arr.length) {
        return null;
    }
    let max = -Infinity;
    // prevent the right edge of pointer window from exceeding arr.length
    for (let i = 0; i < arr.length - num + 1; i++) {
        // store the sum for each iteration
        let temp = 0;
        for (let j = 0; j < num; j++) {
            temp += arr[i + j];
        }
        if (temp > max) {
            // make sure max is always the largest temp
            max = temp;
        }
    }
    return max;
}

// refactored solution
function maxSubarraySum(arr, num) {
    let maxSum = 0;
    let tempSum = 0;
    // edgecase
    if (arr.length < num) return null;
    for (let i = 0; i < num; i++) {
        // store the first iteration in maxSum
        maxSum += arr[i];
    }
    // move maxSum to tempSum
    tempSum = maxSum;
    for (let i = num; i < arr.length; i++) {
        // move the window
        // drop the first item of tempSum and add the next iteration item
        tempSum = tempSum - arr[i - num] + arr[i];
        // compare new tempSum against current maxSum
        maxSum = Math.max(maxSum, tempSum);
    }
    return maxSum;
}