/*Use the BMI example from Challenge #1, and the code you already wrote, and
improve it.
Your tasks:
1. Print a nice output to the console, saying who has the higher BMI. The message
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
BMI (28.3) is higher than John's (23.9)!"
Hint: Use an if/else statement */


const massMark = 85;
const heightMark = 1.73;

const massJohn = 89;
const heightJohn = 1.58;

const markBMI = massMark/heightMark **2;
const johnBMI = massJohn/ heightJohn **2;
console.log(markBMI, johnBMI);

if (markBMI > johnBMI) {
    console.log(`Mark's BMI: ${markBMI} is higher than John's BMI: ${johnBMI}`);
}else{
    console.log(`John's BMI: ${johnBMI} is higer than Mark's BMI: ${markBMI}`);
}

