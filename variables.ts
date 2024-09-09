// Type Inference

// ---------- Numbers ------------

let sampleNumber: number = 123;
// sampleNumber = {a: 123, b: 456}; will give error

console.log(sampleNumber);


// It is not necessary to declare type after each variable
// Implicit type assignment also works
let sampleNumber2 = 123;
// sampleNumber2 = "";        // this will give err





// --------------- Arrays ------------------

let arr: number[];      // Array of integers
arr = [1,2,3];

// arr = [1, 2, 3, ""];    // these will give err
// arr.push("xyz"); 
console.log(arr);