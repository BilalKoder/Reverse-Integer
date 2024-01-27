function reverseInteger(x) {
    const INT_MAX = Math.pow(2, 31) - 1;
    const INT_MIN = -Math.pow(2, 31);

    let reversed = parseInt(Math.abs(x).toString().split('').reverse().join(''));

    if (x < 0) {
        reversed = -reversed;
    }

    if (reversed < INT_MIN || reversed > INT_MAX) {
        return 0;
    }

    return reversed;
}

// Example usage:
const result = reverseInteger(123);
console.log(result); // Output: 321