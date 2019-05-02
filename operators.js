var age = 11;
var accompaniedByAdult = false;

function check(){
    if (18 <= age && age < 21){
        if (accompaniedByAdult){
            return "allowed"
        } else {
            return "denied";
        }
    }
    if (age >= 21){
    return 'you are free';
}
return 'try again next year';
}

console.log(check())