// tenary or conditional operator

const age = 19;
age >= 18 ? console.log(`I like to drink wine`):
console.log(`I like to water`);

// more simplified tenary operator

const drink = age >= 18 ? 'wine' : 'water';
console.log(drink)

// using if statement 
let drink2;
if (age >= 18) {
    drink2 = 'wine';
}
else{
    drink2 = 'water';
}
console.log(drink2);

console.log(`I like to drink ${drink}`);