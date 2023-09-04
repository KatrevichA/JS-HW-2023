// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
let str1 = 'hello world';
console.log(str1.length);

let str2 = 'lorem ipsum';
console.log(str2.length);

let str3 = 'javascript is cool';
console.log(str3.length);

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
console.log(str1.toUpperCase());
console.log(str2.toUpperCase());
console.log(str3.toUpperCase());

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
let s1 = 'HELLO WORLD';
console.log(s1.toLowerCase());
let s2 = 'LOREM IPSUM';
console.log(s2.toLowerCase());
let s3 = 'JAVASCRIPT IS COOL';
console.log(s3.toLowerCase());

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
let strD = ' dirty string   '
// console.log(strD.length);
// let clearStr = (strD.substring(1,13))
// console.log(clearStr.length);
let data = strD.replaceAll(' ', '');
console.log(data);

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
let str = 'Ревуть воли як ясла повні';
console.log(str.split(' '));

// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
let arreyN = [10,8,-7,55,987,-1011,0,1050,0];
let strings = arreyN.map (value => {
    return value.toString()
});
console.log(strings)

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
let nums = [11,21,3];
let sortNums = nums.sort((a,b)=>{
    return a-b
});
console.log(sortNums);
// ==========================
// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// -- відсортувати його за спаданням за monthDuration
let decrease = coursesAndDurationArray.sort((a, b) =>{
    return b.monthDuration -a.monthDuration
});
console.log(decrease)

// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
let filterdTime = coursesAndDurationArray.filter(value => value.monthDuration >5);
console.log(filterdTime)

// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
function uuidv4() {
    return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
        (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    );
}
let map = coursesAndDurationArray.map(function (elements) {
    elements.id = uuidv4();
    return {id:elements.id, title:elements.title, monthDuration:elements.monthDuration}

});
console.log(map)
// =========================

//     описати колоду карт (від 6 до туза без джокерів)
const cards = [];
for (let cardSuit of ['spade', 'diamond','heart', 'clubs'])
    for (let value=6; value<=14;value++)
        cards.push({cardSuit, value});
console.log(cards)
// - знайти піковий туз

// - всі шістки
const filtered =cards.filter(c =>c.value===6);
console.log(filtered);
// - всі червоні карти

// - всі буби
const filteredD =cards.filter(c =>c.cardSuit==='diamond');
console.log(filteredD);
// - всі трефи від 9 та більше

// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }
//
// =========================
//
//     Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт

// {
//     spades:[],
//     diamonds:[],
//     hearts:[],
//     clubs:[]
// }
// =========================
//     взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
// --написати пошук всіх об'єктів, в який в modules є sass
// --написати пошук всіх об'єктів, в який в modules є docker