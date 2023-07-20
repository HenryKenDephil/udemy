/**
 * type conversion and coercion
 * type conversion is manual conversion
 * type coercion is automatic conversion
 */


// type conversion
const inputYear = '1991';
console.log(Number(inputYear)); //Number() converts string to a number

console.log (Number(inputYear) + 18);
console.log(Number('Jonas')); // returns NaN which means not a number 

console.log(String(22), 22); // returns string

// type coercion takes place behind the scene

console.log(`I'm` + ' ' + 23 + `years old`);

console.log('23' - '10' -'3'); // minus operator converts strings to number    

console.log('23' * '2');
console.log('22' / '2'); 

console.log('23' > '18');

let n = '1' + 1;
n = n - 1;
console.log(n);