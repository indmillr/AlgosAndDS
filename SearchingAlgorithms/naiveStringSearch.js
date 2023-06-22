// count the number of times a smaller string appears in a longer string
// loop over the longer string
// loop over the shorter string
// if the chars don't match, break the inner loop
// if the inner loop finds a match, increment the count. 
// return the count

function naiveSearch(long, short) {
    let count = 0;
    for (let i = 0; i < long.length; i++) {
        for (let j = 0; j < short.length; j++) {
            if (short[j] !== long[i + j]) {
                break;
            }
            if (j === short.length - 1) {
                count ++;
            }
        }
    }
    return count;;
}