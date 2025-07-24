## Day 1: Functions

**Problem:** [HackerRank - 10 Days of JavaScript: Day 1: Functions](https://www.hackerrank.com/challenges/js10-function/problem)

**Solution:** This solution calculates the factorial of a given number using a recursive function.

```javascript
'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });

    main();
});

function readLine() {
    return inputString[currentLine++];
}
/*
 * Create the function factorial here
 */
function factorial(n){
    if(n == 1) {return 1}
    return n * factorial(--n)
}

function main() {
    const n = +(readLine());

    console.log(factorial(n));
}
```
