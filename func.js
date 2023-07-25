
'use strict';
function calculator(a,b){
    const add = a + b;
    return add;
    
}


const result = calculator(50, 5);
console.log(result);

// function declarations vs functions expressions


// function declaration; can be called before defining the function
function calcAge1(birthYear){
    return 2037 -birthYear;
}

const age1 = calcAge1(1998);
console.log(age1);

// function expression; can't be called before function definition

const calcAge2 = function(birthYear){
    return 2037 -birthYear;
}

const age2 = calcAge2(1994);
console.log(age2);


// arrow function from ES6
// it's excellent for a single line function
// it explicitly calls the return i.e, no return keyword needed

const calcAge3 = birthYear => 2037 -birthYear;
const age3 = calcAge3(1987);
console.log(age3);


const yearUntilRetirement = (birthYear, firstName) =>{
    const age = 2023 - birthYear;
    const retirement = 65 - age;
    // return retirement;
    return `${firstName} retires in ${retirement} years`;
}

console.log(yearUntilRetirement(1992, 'kenner'));
console.log(yearUntilRetirement(1994, 'emmy'));


// functiosn calling other functions

function cutFruitPieces(fruit){
    return fruit * 4;
}

function fruitProcessor(apples, oranges){
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} pieces of apple and
    ${orangePieces} pieces of orange`;

    return juice;
}

const appleOranageJuice = fruitProcessor(2,3);
console.log(appleOranageJuice);