/*
two types of data dtypes are primitive and objects
seven types of primitive data types are:
numbers, strings, booleans, undefined, BigInt, null and symbols
*/

true;
console.log(true);
console.log(typeof(true));

let age = 24;
console.log(typeof age);

const firstName = 'John';
var lastName = 'Doe';
console.log(firstName + ' ' + lastName,' is of', typeof(firstName), 'data type');

//we declare variable using: let, const and var

/*
let: allow reasigning of variables or mutating variables
const: declare variables that do not change or unimmutable variable
there is no empty or undefined const variable eg: const job;

var: old way for declaring variables before es6.
it should be avoided 

good practice; make use of const and only let if variable is to change
such practices reduces mutation and potential to create burgs 
*/
