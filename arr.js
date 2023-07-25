// array is a container of lists of elements

// creating arrays using square brackets
const friends = ['Janet', 'Jane', 'Winred', 'Karen'];
// console.log(friends);

// creating arraus using the array methods (new Array)

const yrs = new Array(2023, 2022, 2021, 2000,2001, 2002, 2003);
// console.log(years);
// console.log(years.length);
// console.log(friends[0]);
// console.log(friends[1]);

// accessing last index in array methods

// console.log(friends[friends.length - 1]);

// replacing elements in array

friends[2] = 'Jay';
// console.log(friends);

const firstName = 'Ken';
const ken = [firstName, 'Henry', 2037 -1992, 'engineer', friends];
// console.log(ken);
// console.log(ken.length);

// exercise

const calcAge = function(birthYaer) {
    return 2037 - birthYaer;
}

const years = [1990, 1987, 2001, 1991];
const age1 = calcAge(years[0]);
const age2 = calcAge(years[years.length -2]);
// console.log(age1, age2);

// array methods or operations

// push method adds an element to the end of the array
const newLength = friends.push('Vin');
// console.log(friends);
// console.log(newLength);
// console.log(friends.length);

friends.unshift('John'); //adds the first element to the
// console.log(friends);

// remove method removes the last element 

friends.pop();
// console.log(friends);
friends.shift(); //removes the first element
// console.log(friends);
// console.log(friends.pop().length);

// indexOf returns the index of an element
console.log(friends.indexOf('Jay'));

// includes method returns true if the element is in the array

console.log(friends.includes('Jay'));
console.log(friends.includes('Wlly'));
console.log(friends.indexOf('steven'));