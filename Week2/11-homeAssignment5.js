// 11-homeAssignment5.js

// Understand how to reverse a string and check for palindromes in JavaScript by manipulating strings and
// using conditional logic.

function reverse(str) {

    let arr = str.split("");

    let rev = "";

    for(let i = arr.length - 1; i >= 0; i--) {
        
        rev = rev + arr[i];

    }

    console.log("Reversed String: " +rev);

    return rev;

}


    function isPalindrome(str) {

        let rev = reverse(str);


    if(str === rev) {

        return true
        
    } else {
        return false
        
    }

}

console.log("Is Palindrome: ", isPalindrome("radar"));
console.log("Is Palindrome: ", isPalindrome("lemon"));