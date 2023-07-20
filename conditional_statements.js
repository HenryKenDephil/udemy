const age = 13;


if (age >= 18) {
    console.log('Sara can start driving license');
}
else {
    const yearsLeft = 18 -age;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years`);
}

const birthYear = 2003;

let century;

if (birthYear <= 2000) {
    century = 20;
}
else{
    century = 21;
}

console.log(century);