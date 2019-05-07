// var user = {}; //empty
// var name = prompt('enter name:'); // answer to a promt is always a string
// // console.log({name}); // if you wrap var in {} responce in console more data
// // console.log(typeof name);
// // console.log(!name); //  != not
// // console.log(!!name);
// // console.log(!isNaN(name));
// // console.log(isNaN(name));


// // if (name === '' || name === ' ' || parseInt(name)){
// //     alert('Enter Valid name');
// // } else{
// //     user.name = name; // save in name
// // }

// if (name && isNaN(name)){
//     user.name = name;
//     var power = prompt ('Enter your Health power');
//     console.log(isNaN(power));

//     if (power && !isNaN(parseInt(power)){
//         user.power = parseInt(power);
//     } else {
//         alert('Enter valid power');
//     }
// } else {
//     alert('Enter Valid Name');
// }
// console.log(name); // 


// assignment 3 reviewing loops
// var user = {
//     name: 'Emily',
//     power: 50
// };

var arrUsers = [];

// user object was name and power

// arrUsers.push(user);
console.log(arrUsers);

// user inputs number of users
var userCount = 5;


// while (arrUsers.length < userCount) {
//     var user ={};
// // DIY: add validation on these prompts
// user.name = prompt('enter usr name: ');
// user.power = prompt('enter usre power: ');
// console.log(user);
// arrUsers.push(user);
// }

// or

for ( var i = 0; i < userCount; i++) {
    var user ={};
// DIY: add validation on these prompts
user.name = prompt('enter usr name: ');
user.power = prompt('enter usre power: ');
console.log(user);
arrUsers.push(user);
}
// output each user to  console
console.log(arrUsers[0]);
console.log(arrUsers[1]);
console.log(arrUsers[2]);
console.log(arrUsers[3]);
console.log(arrUsers[4]);


excludedName = ['poopface', 'idoit'];
var isExcluded = excludedName.find(function(excluded){
    return excluded === name;
});

var newIsExcluded = excluded.find((excluded)=> excluded === name);