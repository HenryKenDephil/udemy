// object is made up of key value pairs
// it's like dictionary in python

// creating object using carliraces 
const jonas = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1992,
    job: 'teacher',
    friends: ['Kelvin', 'Junior', 'Alvin'],
    hasDriverLicense: true,

    /*calcAge: function(birthYear) {
        return 2037 -birthYear;
    }*/
    calcAge: function(){
        // console.log(this);
        this.age = 2037 -this.birthYear;
        return this.age;
    },
    getSummary: function(){
        return `${this.firstName} is a ${this.calcAge()} year old ${jonas.job}, and he has ${this.hasDriverLicense ? 'a': 'no'} driver's license.`;
    }
};

// console.log(jonas);

// object methods

// accessing properties of an object using dot notation

// console.log(jonas.firstName);

// using brackets notation

// console.log(jonas['lastName']);

const nameKey = 'Name';
// console.log(jonas['first' + nameKey], jonas['last' + nameKey]);

// use bracket notation when computing

/* const interestedIn = prompt('Enter what you want to know about jonas: firstName, lastName, age, job or friends:');

 console.log(jonas[interestedIn]);

if (jonas[interestedIn]) {
    console.log(jonas[interestedIn]);
}
else {
    console.log('wrong request! choose btn firstName, lastName, age, job and friends');
}*/

// adding properties using dot notation or brackets

jonas.location = 'Portugal';
jonas['twitter'] = '@jonas.com';
// console.log(jonas);

// jonas has 3 friends and his best friend is Alvin

// console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[2]}`);

// object methods

 console.log(jonas.calcAge());
 console.log(jonas.getSummary());
 console.log(jonas.age);
// console.log(jonas['calcAge'](1992));