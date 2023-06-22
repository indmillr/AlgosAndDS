// start looping at the end of the array and move toward the beginning
// nested loop from the beginning to the end

// naive solution
function bubbleSort(arr) {
    for (let i = arr.length; i > 0; i--) {
        for (let j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // SWAP
                let temp = arr[j];
                arr[j] = arr[j + 1];
                temp = arr[j + 1];
            }
        }
    }
    return arr;
}

// optimized
function bubbleSort(arr) {
    let noSwaps;
    for (let i = arr.length; i > 0; i--) {
        noSwaps = true; // Stop the looping if an iteration causes no swapping
        for (let j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j]; // SWAP
                arr[j] = arr[j + 1];
                temp = arr[j + 1];
                noSwaps = false;
            }
        }
        if (noSwaps) break;
    }
    return arr;
}

