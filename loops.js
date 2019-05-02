var fruit = ['apple', 'banana', 'peach', 'grapes', 'orange'];
console.log(fruit);

// for loop

for(var i = 0; i < fruit.length; i++){
    console.log(fruit[i]);
}

 //  do while
var index = 0;
// do {
//     console.log(fruit[index]);
//         index++;
//  } while (index < fruit.length);

//  while
// while(index < fruit.length){
//     console.log(fruit[index]);
//     index++
// }

// while (hour > 18 && < 21){

// }
// && means both conditions must be true
// || means first condition OR next condition = true

// for in
fruit.foo = 'test'; // foo means

for (var i in fruit){
    console.log(i);
}

//  for of
for (var i of fruit){
    console.log(i);
}