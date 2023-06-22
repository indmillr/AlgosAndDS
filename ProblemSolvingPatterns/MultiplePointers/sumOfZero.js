// write a function that accepts a SORTED array of integers
// find the FIST pair where the sum is 0
// return an array the includes both values that sum to zero or Undefined if does not exist

// naive solution
function sumZero(arr) {
    // first pointer starts at beginning of array
    // moves forward if no matches through all iterations of second pointer
    for (let i = 0; i < arr.length; i++) {
        // second pointer starts ahead of first pointer and moves through each item
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === 0){
                return [arr[i], arr[j]];
            }
        }
    }
}

// refactored solution
function sumZero(arr) {
    // left pointer at beginning of array
    let left = 0;
    // right pointer at end of array
    let right = arr.length - 1;
    // failsafe to prevent pointers from overlapping
    while (left < right) {
        let sum = arr[left] + arr[right];
        // if sum is 0, stop!
        if (sum === 0) {
            return [arr[left], arr[right]];
        } else if (sum > 0) { // if greater than zero, move right pointer to the left
            right--;
        } else { // if less than zero, move left pointer to the right
            left++;
        }
    }
}