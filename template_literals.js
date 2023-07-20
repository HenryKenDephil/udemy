// strings literals


const firstName = 'John';
const job = 'teacher';
const birthYear = 1991;
const year = 2037

const John = "I'm " + '' + firstName + ', a ' + (year-birthYear) + ' years old' + ' ' + job + '!';
console.log(John);

// using template literals
//template literals make use of backticks (``)

const JohnNew = `Hello, I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(JohnNew);

// creating multiline string 

console.log('string with \n\
multiple \n\
lines');  // multiple lines withiout literals

// multiple lines using template literals

console.log(`John
Smith
Makamu`); // multiple lines