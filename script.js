    //    7-dars

// const son = 8;  // data type = sonlar
// console.log(son)

// const harflar = 'harf';
// console.log(harflar)

// const col = true;
// console.log(col)

// // massivlar

// const massiv = {
//   ismim: 'shahboz',
//   yoshim: 21,
//   uylanganmi: false,
// }
// console.log(massiv.uylanganmi)

// // obyektlar

// const obyekt = [ 'men', 'sen', 'ular', ]
// console.log(obyekt[1])


  //     8-dars

// 'use strict';

// const firstName = 'shahboz';

// const age = 21;

// console.log(`mening ismim ${firstName} va yoshim ${age}` );

// const xName = prompt('Entir your name', '');

// console.log(`user's name ${xName}`);


//         9-dars

// 'use strict';

// const x = 10,
//   y = 20;

// console.log(x+y);
// console.log(5-5);
// console.log(5/5);
// console.log(5*5);

// console.log('Hello'+   ' world')

// const rado = 4 + 'radioim';
// console.log(typeof rado)
// console.log(4+' radio')

// let z = 10;
// console.log(++z);

// let incr = 99;
// let decr = 99;

// // console.log(++incr);
// // console.log(--decr)

// console.log(incr++);
// console.log(decr--);
// console.log(incr);
// console.log(decr);


// console.log(5 % 2);

// const m = 28;
// const n = 6;

// console.log(m % n);

// console.log(2 * 3 == '6');
// console.log( 2 * 3 === '6');

// const isChecked = true,
//  isClose = false

//  console.log(isChecked && (isClose || !isChecked));



 //   10-dars

//        11-dars

"use strict";

const numberOfNews = prompt("siz qancha yangilik ko'rgansiz");

const personalNewsDB ={
  count: numberOfNews,
  news: {},
  actors: {},
  genrs: [],
  privat: false,
}

const a = prompt("Oxirgi ko'rgan yangiliklaringizdan biri?"),
    b = prompt("Unga qancha baho bergan bo'lar edingiz?")


personalNewsDB.news.a = b;
console.log(personalNewsDB);