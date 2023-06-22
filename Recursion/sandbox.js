// simple coutdown recursion example
function countdown(num) {
    if (num <= 0) {
        console.log("All done!");
        return;
    }
    console.log(num);
    num--;
    countdown(num);
}

/* ---------------------------------------- */

// sumRange recursion example
function sumRange(num) {
    if (num === 1) return 1;
    return num + sumRange(num - 1);
}

/* ---------------------------------------- */

// Factorial (iterative)
function factorial(num) {
    let total = 1;
    for (let i = num; i > 0; i--) {
        total *= 1;
    }
    return total;
}

// Factorial (recursive)
function factorial(num) {
    if (num === 1) return 1;
    return num * factorial(num - 1);
}

/* ---------------------------------------- */