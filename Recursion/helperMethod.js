// Helper Method examples Recursion

// The Pattern
function outer(input) {
    let outerScopedVar = [];

    function helper(helperInput) {
        // modify the outerScopedVar
        helper(helperInput--)
    }
    helper(input);

    return outerScopedVar;
}

// Example: Collect all of the odd values in an array (Helper Method)
function collectOddValues(arr) {
    // define result outside of helper function to avoid resetting this each iteration
    let result = [];

    function helper(helperInput) {
        if (helperInput.length === 0) {
            return;
        }

        if (helperInput[0] % 2 !== 0) {
            result.push(helperInput[0]);
        }

        helper(helperInput.slice(1));
    }
    helper(arr);
    return result;
}

// Example: Collect all of the odd values in an array (Pure Recursion)
function collectOddValues(arr) {
    // define new variable each time through (will reset)
    let newArr = [];

    // check if input is empty
    if (arr.length === 0) {
        return newArr;
    }

    // check if first num in arr is odd
    if (arr[0] % 2 !== 0) {
        newArr.push(arr[0]);
    }

    // concat will build up the result on the call stack
    newArr = newArr.concat(collectOddValues(arr.slice(1)));
    return newArr;
}