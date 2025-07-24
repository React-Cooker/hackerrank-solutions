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