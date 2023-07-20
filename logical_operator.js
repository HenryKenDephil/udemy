
const hasDrivingLicense = true;
const hasGoodVision = false;
const isTired = true

console.log(hasDrivingLicense && hasGoodVision); //AND operator
console.log(hasDrivingLicense || hasGoodVision); //OR operator
console.log(!hasDrivingLicense); // NOT operator

if ( hasDrivingLicense && hasGoodVision) {
    console.log('Sarah is able to drive');
} 
else{
    console.log('someone else should drive');
}