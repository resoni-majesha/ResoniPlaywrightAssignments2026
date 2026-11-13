// 10-homeAssignment4.js

// eg 1:
let s = "Hello World";

let split = s.split(" "); // Split the string into an array
// console.log(split); // [ 'Hello', 'World' ]

let lastWord = split[split.length - 1]; // To find the last word in the array
// console.log(lastWord); // World

let result = lastWord.length;
console.log("The length of the last word is " +result); // 5

// eg 2:
let w = "  fly me to the moon ";

let trimmed = w.trim(); // To trim the space
// console.log(trimmed); // fly me to the moon

let split1 = trimmed.split(' '); // Split the string into an array
// console.log(split1); // [ 'fly', 'me', 'to', 'the', 'moon' ]

let lastWord1 = split1[split1.length - 1];
// console.log(lastWord1); // moon

let lastWordLength = lastWord1.length;
console.log(`the length of the last word is ${lastWordLength}`); //4

// eg 3:
// Anagram

function isAnagram(str1, str2) {

    str1 = str1.replace(/\s,/g, "").toLowerCase(); // replace space & convert to lowercase
    str2 = str2.replace(/\s,/g, "").toLowerCase();

    let arr1 = str1.split("").sort(); // split converts the string to array of characters
    // as we used "" without space and sort the value
    // e i l n s t
    let arr2 = str2.split("").sort();

    let result = arr1.join("") === arr2.join(""); // Converts array of char to string
    // and compare 2 value

    return result; // true
    // false 
    // This value will be given to where the function is called i.e., to is anagram

}

console.log("The given strings are anagram: ", isAnagram('listen', 'silent'));
console.log("The given strings are anagram: ", isAnagram('hello', 'world'));

/* 
The length of the last word is 5
the length of the last word is 4
The given strings are anagram:  true
The given strings are anagram:  false
*/










