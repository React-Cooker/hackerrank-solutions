## Day 0: Hello, World!

**Problem:** [HackerRank - 10 Days of JavaScript: Day 0: Hello, World!](https://www.hackerrank.com/challenges/js10-hello-world/problem)

**Solution:** This solution prints "Hello, World!" and the contents of a parameter variable to the console.

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

/**
*   A line of code that prints "Hello, World!" on a new line is provided in the editor.
*   Write a second line of code that prints the contents of 'parameterVariable' on a new line.
*
*	Parameter:
*   parameterVariable - A string of text.
**/
function greeting(parameterVariable) {
    console.log("Hello, World!");
    console.log(parameterVariable);
}


function main() {
    const parameterVariable = readLine();

    greeting(parameterVariable);
}
```
