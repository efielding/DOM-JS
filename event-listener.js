
var btn = document.getElementsByClassName('button'); 

var btnUsingSelector = document.querySelector('.button');
btn[0].style.padding = '10px';
btn[0].style.fontSize = '22px';

// add event listener
btnUsingSelector.addEventListener('click', function(){
    console.log('Button was clicked from JS');
});

// btnUsingSelector.addEventListener('mouseover', function(event){
//     console.log(event);
//     var btnText = event.target.innerHTML;
//     alert('Mouseover on the ' + btnText + ' button.');
    
// }); //mouseover is like hover

var cancelBtn = document.querySelector('.cancel');
cancelBtn.addEventListener('click', function(){
    var response = confirm('Confirm Cancel');
    console.log(response);


// if user confirms, do something = when response value is true


// if user cancels, do something = response value is false
});


// add an event  on the document that captures any key that is typed/clicked on the keyboard
// console.log the key value

document.addEventListener('keypress', function (event) {
	console.log(event);
});

document.addEventListener('keydown', function(event){
    console.log(event);
    console.log(event.keyCode);
});

document.addEventListener('keyup', function(event){
    console.log(event);
    console.log(event.keyCode);
});


// listen for scroll event and console.log position of cursor

document.addEventListener('scroll', function(event){
    console.log(event);
    console.log(event.keyCode);
});




