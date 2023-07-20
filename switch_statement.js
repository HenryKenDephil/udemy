
const day = 'tuesday';

switch (day) {
    case 'monday':
        console.log('plan course structure');
        console.log('go to coding meetups');
        break;
   
    case 'tuesday':
        console.log('prepare theory videos');
        break;

    case 'wednesday':
    case 'thursday':
        console.log('write code examples');
        break;

    case 'friday':
        console.log('records videos');
        break;

    case 'saturday':
    case 'sunday':
        console.log('enjoy the weekend');
        break;

    default:
        console.log('not a valid day');
};