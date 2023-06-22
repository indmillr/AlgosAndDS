// a function that accepts two arrays
// return true if every value in the array has it's corresponding value squared in the second array
// the frequency of values must be the same

// naive solution
function same(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }
    for (let i = 0; i < arr1.length; i++) {
        let correctIndex = arr2.indexOf(arr1[i] ** 2)
        if (correctIndex === -1) {
            return false;
        }
        console.log();
        arr2.splice(correctIndex, 1)
    }
    return true;
}

// refactored solution
function same(arr1, arr2) {
    // short-circuit if arrays are not same length
    if (arr1.length !== arr2.length) {
        return false;
    }
    // create obj for each arr to count freq
    let freqCounter1 = {};
    let freqCounter2 = {};
    // for each val, if it doesn't exist then initialize; if it does exist, add 1
    for (let val of arr1) {
        freqCounter1[val] = (freqCounter1[val] || 0) + 1;
    }
    // for each val, if it doesn't exist then initialize; if it does exist, add 1
    for (let val of arr2) {
        freqCounter2[val] = (freqCounter2[val] || 0) +1;
    }
    // loop through freqCounter1 
    for (let key in freqCounter1) {
        // does the key in freqCounter1 squared exist in freqCounter 2?
        if (!(key ** 2 in freqCounter2)) {
            return false;
        }
        // if keys match, do the values match?
        if (freqCounter2[key ** 2] !== freqCounter1[key]) {
            return false;
        }
    }

    return true;
}