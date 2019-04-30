// if conditions

var hour = 22;

// if (hour > 18){
//     console.log('class has started');
// }

// if (hour < 21){
//     console.log('continue class');
// }

if (hour > 18 && < 21) {
    console.log('class hours');
} else if (hour > 24 && < 4){
    console.log('sleep time');
} else {
    console.log('non class hours');
}

var minute = prompt('how many mins past the hour?');
// switch conditions
switch (minute){
    case 0: 
    console.log('hour has just begun');
    break;

    case 30:
    console.log('half past the hour');
    break;

    default:
    console.log('waiting for next hour');
    break;
}