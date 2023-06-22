// write a function that accepts a base and an exponent
// return the power of the base to the exponent
// mimic the functionality of Math.pow()
// ignore negative bases and exponents

function power(base, exponent) {
    if (exponent === 0) return 1;
    return base * power(base, exponent - 1);
}