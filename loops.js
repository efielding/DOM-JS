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
<<<<<<< HEAD
fruit.foo = 'test'; // looks at index in array
=======
fruit.foo = 'test'; // foo means
>>>>>>> eea6365bc94a87d65ab8afd2304b4c1ccbce3eea

for (var i in fruit){
    console.log(i);
}

<<<<<<< HEAD
//  for of  looking at only arry key values in array
=======
//  for of
>>>>>>> eea6365bc94a87d65ab8afd2304b4c1ccbce3eea
for (var i of fruit){
    console.log(i);
}