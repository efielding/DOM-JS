var user= {}

var userName = prompt('what is your name?');

if (isNaN(userName)) {
  console.log(userName);

} else {
   console.log('That is not correct');
   prompt('what is your name');
}

// var cancelBtn = document.querySelector('.cancel');
// cancelBtn.addEventListener('click', function(){
//     var response = confirm('Confirm Cancel');
//     console.log(response);

// var userName = document.querySelector('.form');
// userName.addEventListener('click', function(){
//     if (isNaN(userName)){
//         console.log(userName);
//     } else {
//         console.log('incorrect');
//         prompt('User name may not contain spacees or numeric values.');
//     }
// })
