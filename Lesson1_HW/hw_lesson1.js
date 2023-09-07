// - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//     Вивести кожну змінну за допомогою: console.log
//
let s = 'hello';
console.log(s);
let s1 = 'owu';
console.log(s1);
let s2 = 'com';
console.log(s2);
let s3 = 'ua';
console.log(s3);
let n =1;
console.log(n);
let n1 =10;
console.log(n1);
let n2 = -999;
console.log(n2);
let n3 = 123;
console.log(n3);
let n4 = 3.14;
console.log(n4);
let n5 = 2.7;
console.log(n5);
let n6 = 16;
console.log(n6);
let bt = true;
console.log(bt);
let bf = false;
console.log(bf);
//
// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)
//
let firstName = "Anastasia";
let middleName = "Muravlova"
let lastName = "Bogdanivna"
let person = firstName+' ' +middleName+' '+lastName;
console.log(person);
//
// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//     let a = 100; let b = '100'; let c = true;
//
//3 step//
let a = 100;
console.log(typeof a);
let b = '100';
console.log(typeof b);
let c = true;
console.log(typeof c);
//
// Додаткове для тих хто цікавився prompt`oм
// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками. та вивести в консоль
//
let firstName1 = prompt('Yours Name!');
let middleName1 = prompt('Yours Middle Name!');
let lastName1 = prompt('Yours Last Name!');
let connect = `${firstName1} ${middleName1} ${lastName1}`;
console.log(connect);
//



