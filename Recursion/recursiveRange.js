// write a function that accepts a number and adds up all the numbers from 0 to that number

function recursiveRange(num) {
    if (num === 0) return 0;
    return num + recursiveRange(num - 1);
}