// var age = 11;
// var accompaniedByAdult = false;

// if user must enter info
var age = prompt('Enter your age: ');
var accompaniedByAdult = ('are you accompanied by someone over 21?'); // use confirm if you want a yes or no answer

// console.log(typeof (age)); // returns string
// console.log(typeof parseInt(age)); //returns number

// function check(){
//     if (18 <= age && age < 21){
//         if (accompaniedByAdult.prompt){
//             return "allowed"
//         } else {
//             return "denied";
//         }
//     } else if (age >= 21){
//     return 'you are free';
// }
// return 'try again next year';
// }

// console.log(check())

// function check(){
//     if (18 <= age && age < 21){
//        // teranry operatiom
//        accompaniedByAdult ? console.log('allowed') : console.log('denied');
//     }
//     if (age >= 21){
//     return 'you are free';
// }
// return 'try again next year';
// }

// console.log(check())


// teranry operation
// (age >= 18 && < 21) ? (accompaniedByAdult ? console.log('allowed') : console.log('denied')) : (age >= 21) / console.log('you are free') : console.log('try again next year');

function check(){
    if (18 <= age && age < 21){
        var accompaniedByAdult = confirm('are you accompanied by someone over 21?');
    } else if (age >= 21){
    return 'you are free';
}
return 'try again next year';
}

console.log(check())