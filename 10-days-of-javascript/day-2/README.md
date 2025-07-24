## Day 2: Loops

**Problem:** [HackerRank - 10 Days of JavaScript: Day 2: Loops](https://www.hackerrank.com/challenges/js10-loops/problem)

**Solution:** This solution iterates through a string, printing vowels and consonants on separate lines.

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
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {
    // Solution 1: Non-Optimized (but clever) approach using splice()
/*
function vowelsAndConsonants(s) {
    let sa = s.split('');
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    for(var i =0;i< sa.length;i++ ){
        if(vowels.includes(sa[i])){
            console.log(String(sa.splice(i,1)));i--;
        }
    }
    for(var i =0;i< sa.length;i++ ){
        console.log(sa[i]);
    }
}
*/
// --------------------------------------------------
// Solution 2: Optimized and Standard Approach
    const vowels = 'aeiou';

    for (const char of s) {
        if (vowels.includes(char)) {
            console.log(char);
        }
    }

    for (const char of s) {
        if (!vowels.includes(char)) {
            console.log(char);
        }
    }

}


function main() {
    const s = readLine();

    vowelsAndConsonants(s);
}
```

---

## Day 2: Conditional Statements (Switch)

**Problem:** [HackerRank - 10 Days of JavaScript: Day 2: Conditional Statements: Switch](https://www.hackerrank.com/challenges/js10-switch/problem)

**Solution:** This solution uses a switch statement to determine the letter grade based on the first letter of a string.

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

function getLetter(s) {
    let letter;
    // Write your code here

    switch(s[0]){
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
            letter='A'; break;
        case 'b':
        case 'c':
        case 'd':
        case 'f':
        case 'g':
            letter='B'; break;
        case 'h':
        case 'j':
        case 'k':
        case 'l':
        case 'm':
            letter='C'; break;
        default:
            letter='D'; break;
    }
    return letter;
}


function main() {
    const s = readLine();

    console.log(getLetter(s));
}
```
