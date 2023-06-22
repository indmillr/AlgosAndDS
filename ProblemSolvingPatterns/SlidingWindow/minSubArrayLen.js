// write a function that accepts an array of positive integers and a positive integer
// Return the minimal length of a contiguous subarray of which the sum is greater than or equal
// to the integer passed to the function. Return 0 if this does not exist

function minSubArrayLen(nums, sum) {
    let total = 0;
    let start = 0;
    let end = 0;
    let minLen = 0;

    while (start < nums.length) {
        // if current window doesn't add up to the given sum
        if (total < sum && end < nums.length) {
            // move the window to the right
            total += nums[end];
            end++;
        }

        // if current window adds up to at least the sum given
        else if (total >= sum) {
            // shrink the window
            minLen = Math.min(minLen, end-start);
            total -= nums[start];
            start++;
        }
        // current total less than required total but we reach the end
        // this must exist to avoid infinite loop!!
        else {
            break;
        }
    }
    return minLen === Infinity ? 0 : minLen;
}