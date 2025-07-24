## Day 3: Intro to Conditional Statements

**Problem:** [HackerRank - 30 Days of Code: Day 3: Intro to Conditional Statements](https://www.hackerrank.com/challenges/30-conditional-statements/problem)

**Solution:** This solution determines if a number is "Weird" or "Not Weird" based on a set of conditional rules.

```javascript
'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}
function weird(){
    console.log("Weird")
}
function notweird(){
    console.log("Not Weird")
}


function main() {
    const N = parseInt(readLine().trim(), 10);

    if(N%2==1){
        weird();
    }else if(N==1){
        weird();
    }else if(N>=2 && N<=5){
        notweird();
    }else if(N>=6 && N<=20){
        weird();
    }else if(N>=20){
        notweird();
    }
}
```
