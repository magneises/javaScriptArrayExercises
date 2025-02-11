// link: https://www.w3resource.com/javascript-exercises/javascript-array-exercises.php


const string = 'w3resource'

//1. Check Array Input
//Write a JavaScript function to check whether an `input` is an array or not.
function check(input) {
    return typeof(input)
}

// console.log(check('string'))
// console.log(check(7))

// correction to use isArray
function isArray(input) {
    return Array.isArray(input);
}

console.log(isArray(string));
console.log(isArray([1, 2, 3])); 


