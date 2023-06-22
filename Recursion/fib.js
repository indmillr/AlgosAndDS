// write a funtion that accepts a number and returns the nth number in the Fibonacci sequence
// (starts with 1 and every number thereafter is equal to the sum of the previous two numbers)

function fib(num) {
    if (num <= 2) return 1;
    return fib(num - 1) + fib(num - 2);
}