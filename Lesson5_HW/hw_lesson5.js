// ВСЕ ЗРОБИТИ СТРІЛОЧНИМИ ФУНКЦІЯМИ!
// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
let rectangle = (a, b) => a * b;
console.log(rectangle(33,12));

// - створити функцію яка обчислює та повертає площу кола з радіусом r
let circle = (r) =>{
    let radius = r*r;
    return 3.14 * radius;
}
console.log( circle (2));

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
let cylinderA = (r,h) =>{
    let a1 = 2*3.14 * r;
    let a2 = r+h;
    return a1*a2;
}
console.log(cylinderA (3,15));

// - створити функцію яка приймає масив та виводить кожен його елемент
let show = (array) =>{
    for (let arrayElement of array) {
        console.log(arrayElement);
    }
}
show([{},{},{},{},{}]);
show([{name:'Ronn'},{name:'Emma'}]);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
let text = (hello) =>{
    document.write(
        `
        <div>
        <p>${hello}</p>
        </div>
        `
    );
    // console.log (arguments);
}
text ('Hello Okten School!!!');
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
const list = (same) =>{
    document.write(
        `
        <ul>
        <li>${same}</li>
        <li>${same}</li>
        <li>${same}</li>
        </ul>
        `
    );
    // console.log(arguments);
}
list ('Java Script');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
const foobar = (text,counter) =>{
    for (let i = 0; i < counter; i++) {
        // const textElement = counter[i];
        document.write (`<div><ul><li>${text}</li></ul></div>`)
    }
    // console.log(arguments)
}
foobar('okten', 5);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
const printArray = (arrayEl) => {
    for (let el of arrayEl)
    document.write(
        `
        <ul>
        <li>${el}</li>
        </ul>
        `
    );
}
printArray ([12, 'sasha', true]);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
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

const printDivArray = (array) =>{
    for (let field of array) {
        document.write(`<div>id:${field.id} nane:${field.name} age:${field.age}</div>`)
    }
}
printDivArray(users2);

// - створити функцію яка повертає найменьше число з масиву
let returtLnumbers =(arrayNum) =>{
    let min = 0;
    for (let i = 1; i < arrayNum.length; i++) {
        if (arrayNum[i] < min) {
            min = arrayNum[i];
        }
    }
    return min;
}
console.log(returtLnumbers ([5,9,11,3,-2,7,-8,1]));

// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
const sum = (array) => {
    let masuv = array;
    let resuit = 0;
    for (let number of masuv) {
        resuit = resuit+number;
    }
    console.log(resuit);
}
sum ([2, 48, 36, 2, 5, 4, 9]);
sum ([6, 3, 8, 14, 1]);

// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
const swap = (arr,index1,index2)=>{
    let arrElement = arr[index1];
    arr[index1]=arr[index2];
    arr[index2]= arrElement;
    return arr;
}
console.log(swap([11,22,33,44],0,1));

// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
const exchange=(sumUAH,currencyValues,exchangeCurrency) => {
    for (let currencyValue of currencyValues) {
        if (currencyValue.currency===exchangeCurrency){
            return sumUAH / currencyValue.value
        }
    }
}
console.log(exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'EUR'))