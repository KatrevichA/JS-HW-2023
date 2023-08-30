// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function rectangle (a,b) {
    return a*b;
}
let area = rectangle(33,12);
console.log (area);

// - створити функцію яка обчислює та повертає площу кола з радіусом r
function circle (r) {
    let radius = r*r;
    return 3.14 * radius;
}
let number = circle (2);
console.log(number);

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
function cylinderS (r,h) {
    let side = r*h;
    return 2*3.14 * side;
}
let land = cylinderS (2,10);
console.log(land);

function cylinderA (r,h) {
    let a1 = 2*3.14 * r;
    let a2 = r+h;
    return a1*a2;
}
let lands = cylinderA (3,15);
console.log(lands);

// - створити функцію яка приймає масив та виводить кожен його елемент
function show (array) {
    for (let arrayElement of array) {
        console.log(arrayElement);
    }
}
let users = [
        {name: 'vasya', age: 31, status: false},
        {name: 'petya', age: 30, status: true},
        {name: 'kolya', age: 29, status: true},
        {name: 'olya', age: 28, status: false},
        {name: 'max', age: 30, status: true},
        {name: 'anya', age: 31, status: false},
        {name: 'oleg', age: 28, status: false},
        {name: 'andrey', age: 29, status: true},
        {name: 'masha', age: 30, status: true},
        {name: 'olya', age: 31, status: false},
        {name: 'max', age: 31, status: true}
    ];
show(users);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
function text (hello) {
    document.write(
        `
        <div>
        <p>${hello}</p>
        </div>
        `
    );
    console.log (arguments);
}
text ('Hello Okten School!!!');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function list (same) {
    document.write(
        `
        <ul>
        <li>${same}</li>
        <li>${same}</li>
        <li>${same}</li>
        </ul>
        `
    );
    console.log(arguments);
}
list ('Java Script');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
function foobar (text,counter){
    for (let i = 0; i < counter; i++) {
        // const textElement = counter[i];
        document.write (`<div><ul><li>${text}</li></ul></div>`)
    }
    console.log(arguments)
}
foobar('okten', 5);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
function printArray (n, s, b) {
    let arr = Array.from(arguments);
    document.write(
        `
        <ul>
        <li>${n}</li>
        <li>${s}</li>
        <li>${b}</li>
        </ul>
        `
    );
    console.log(arr);
}
printArray (12, 'sasha', true);


// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.
const users2 = [
    {id: 1, name: 'vasya', age: 31},
    {id: 2, name: 'petya', age: 30},
    {id: 3, name: 'kolya', age: 29},
    {id: 4, name: 'olya', age: 28},
    {id: 5, name: 'max', age: 30},
    {id: 6, name: 'anya', age: 31},
    {id: 7, name: 'oleg', age: 28},
    {id: 8, name: 'andrey', age: 29},
    {id: 9, name: 'masha', age: 30},
    {id: 10, name: 'olya', age: 31},
    {id: 11, name: 'max', age: 31}
];

function printDivArray (array) {
    for (let field of array) {
        document.write(`<div>id:${field.id} nane:${field.name} age:${field.age}</div>`)
    }
}
printDivArray(users2);

// - створити функцію яка повертає найменьше число з масиву
// function returtLnumber (array) {
//     for (let field of array) {
//         if (field.age<30)
//             document.write(`<div>age:${field.age}</div>`)
//     }
// }
// returtLnumber(users2);

function returtLnumbers (arrayNum) {
    let min = 0;
    for (let i = 1; i < arrayNum.length; i++) {
        if (arrayNum[i] < min) {
            min = arrayNum[i];
        }
    }
    return min;
}

console.log(returtLnumbers ([5,9,11,3,-2,7,-8,1]));

// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його.
// Приклад sum([1,2,10]) //->13
function sum () {
    let masuv = Array.from(arguments);
    let resuit = 0;
    for (let number of masuv) {
        resuit = resuit+number;
    }
    console.log(resuit);
}
sum (2, 48, 36, 2, 5, 4, 9);
sum (6, 3, 8, 14, 1);
// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

function swap (arr,index1,index2){
    let arrElement = arr[index1];
    arr[index1]=arr[index2];
    arr[index2]= arrElement;
    return arr;
}
console.log(swap([11,22,33,44],0,1));



// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250

// function exchange(uan) {
//     let USD = uan/40;
//     let EUR = uan/42;
//     document.write(`<div>USD:${USD}</div> <div>EUR:${EUR}</div>`);
// }
// exchange(10000);

function exchange(sumUAH,currencyValues,exchangeCurrency) {
    for (let currencyValue of currencyValues) {
        if (currencyValue.currency===exchangeCurrency){
            return sumUAH / currencyValue.value
        }
    }
}
console.log(exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'EUR'))