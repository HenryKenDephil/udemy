
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