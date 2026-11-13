// 08-homeAssignment2.js

let arr = [20, 'Maje', true];

let pushedArray = arr.push('playwright');
console.log(pushedArray); // 4
console.log(arr); // [ 20, 'Maje', true, 'playwright' ]

let poppedArray = arr.pop();
console.log(poppedArray); // playwright
console.log(arr); // [ 20, 'Maje', true ]

let unshiftedArray = arr.unshift('Happy');
console.log(unshiftedArray); // 4
console.log(arr); // [ 'Happy', 20, 'Maje', true ]

let shiftedArray = arr.shift();
console.log(shiftedArray); // Happy
console.log(arr); // [ 20, 'Maje', true ]

let include = arr.includes('Maje');
console.log(include); // true

let indexOf = arr.indexOf(true);
console.log(indexOf); // 2

let arr1 = ['Resoni', 30, 'Book', true];
let join = arr1.join();
console.log(join); // Resoni, 30, Book, true
console.log(arr1); // [ 'Resoni, 30, Book, true' ]
// join() - to convert array to string

//reverse
console.log(arr1.reverse()); // [ true, 'Book', 30, 'Resoni' ]

//sort
console.log(arr1.sort()); // [ 30, 'Book', 'Resoni', true ]














