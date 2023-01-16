'use strict';

let userAge = prompt ("Укажите ваш возраст", "18");
console.log(userAge);

let userName = prompt ("Ваше имя", "Имя");
console.log (userName);

let userGender = prompt ("Укажите ваш пол", "ваш пол");
console.log (userGender);


let number= prompt('Введите число', 0);

if (number > 0) {
    alert( number );
  } else if (number = 0) {
    alert( 0 );
  } 

  console.log(number);


let a = +prompt('a?', '');
console.log(a) // string
a = +a
console.log(a) // number

switch (a) {
    case 0:
    alert( 0 );  
    break;

    case 1:
    alert( 1 );  
    break;

    case 2 || 3:
    alert( '2,3' );  
    break;

}

let sum = 0;
for( let i = 0; i < 100; i++) {
    if (i % 2 == 0){
        sum+=i
    }
}
console.log (sum);

let i = 0;
while (i < 3) {
    alert( `number ${i}!` );
    i++;
}
