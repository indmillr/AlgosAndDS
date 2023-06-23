/*
Create a helper function to return the digit in num at the given place value.
*** Remember that strings are indexed from the left side -- the helper must start at the right side of num (0's, 10's, 100's, etc.)
*/

function getDigit(num, i) {
    // use Math.abs to ignore any negatives then divide by the "place"
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

/*
Create a helper function that will return the number of digits
*** Convert to string? Use math? Use math!
*/

function digitCount(num) {
    // Math.log10(0) = Infinity, so avoid that
    if (num === 0) return 1;
    // use Math.abs to ignore any negatives
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

/*
Create a helper function that takes an array of numbers and
Return the number of digits in the largest numbers in the array
*** Don't need the number itself, just the longest count of digits
*/

function mostDigits(nums) {
    let maxDigits = 0;
    for (let i = 0; i < nums.length; i++) {
        maxDigits = Math.max(maxDigits, digitCount(nums[i]));
    }
    return maxDigits;
}

/*
RADIX SORT Implementation
Define a function that accepts a list of numbers
Figure out how many digits the largest number has
Loop from k=0 to the largest number of digits
For each iteration, create buckets for each digit (0-9)
Place each number in the correct bucket based on its kth digit
Replace existing array with values from the buckets, starting with 0 and going to 9
Return the list
*/

function radixSort(nums) {
    // how many digits in the largest number?
    let maxDigitCount = mostDigits(nums);
    // loop from k to the largest number of digits
    for (let k = 0; k < maxDigitCount; k++) {
        // create 10 empty arrays (buckets)
        let digitBuckets = Array.from({length: 10}, () => [])
        for (let i = 0; i < nums.length; i++) {
            let digit = getDigit(nums[i], k);
            // place each number in the correct bucket based on kth digit
            digitBuckets[digit].push(nums[i]);
        }
        // replace existing array with values from buckets
        nums = [].concat(...digitBuckets);
    }
    return nums;
}