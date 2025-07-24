## Day 3: Arrays

**Problem:** [HackerRank - 10 Days of JavaScript: Day 3: Arrays](https://www.hackerrank.com/challenges/js10-arrays/problem)

**Solution:** This solution finds the second largest number in an array by first creating a unique-sorted array and then returning the second element.

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
*   Return the second largest number in the array.
*   @param {Number[]} nums - An array of numbers.
*   @return {Number} The second largest number in the array.
**/
function getSecondLargest(nums)
{
    // Complete the function

        const uniqueNums = Array.from(new Set(nums));
        uniqueNums.sort((a, b) => b - a);
        return uniqueNums[1];

}


function main() {
    const n = +(readLine());
    const nums = readLine().split(' ').map(Number);

    console.log(getSecondLargest(nums));
}
```

---

## Day 3: Try, Catch, and Finally

**Problem:** [HackerRank - 10 Days of JavaScript: Day 3: Try, Catch, and Finally](https://www.hackerrank.com/challenges/js10-try-catch-and-finally/problem)

**Solution:** This solution attempts to reverse a string and prints the reversed string, but if an error occurs, it catches the exception and prints the error message along with the original string.

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
 * Complete the reverseString function
 * Use console.log() to print to stdout.
 */
function reverseString(s) {
    try{
        let text = s.split('').reverse().join('');
        console.log(text);
    }catch(err){
        console.log("s.split is not a function");
        console.log(s);

    }

}


function main() {
    const s = eval(readLine());

    reverseString(s);
}
```
