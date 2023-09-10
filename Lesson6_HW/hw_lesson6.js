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
let clerS = (strD.trim());
console.log(clerS);



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
let sortNums =(nums, direction) =>{
    switch (direction) {
        case 'ascending':
            nums = nums.sort((a,b) =>a-b);
            break;
        case 'descending':
            nums =  nums.sort ((a,b) => b-a);
            break;
        default:
            console.error('wrong');
    }
    return nums
}
console.log(nums);
console.log(sortNums(nums,'ascending'));
console.log(sortNums(nums,'descending'));
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
const cards = [
    {cardSuit: 'spade', value: '6', color: 'black'},
    {cardSuit: 'spade', value: '7', color: 'black'},
    {cardSuit: 'spade', value: '8', color: 'black'},
    {cardSuit: 'spade', value: '9', color: 'black'},
    {cardSuit: 'spade', value: '10', color: 'black'},
    {cardSuit: 'spade', value: 'jack', color: 'black'},
    {cardSuit: 'spade', value: 'queen', color: 'black'},
    {cardSuit: 'spade', value: 'king', color: 'black'},
    {cardSuit: 'spade', value: 'ace', color: 'black'},
    {cardSuit: 'clubs', value: '6', color: 'black'},
    {cardSuit: 'clubs', value: '7', color: 'black'},
    {cardSuit: 'clubs', value: '8', color: 'black'},
    {cardSuit: 'clubs', value: '9', color: 'black'},
    {cardSuit: 'clubs', value: '10', color: 'black'},
    {cardSuit: 'clubs', value: 'jack', color: 'black'},
    {cardSuit: 'clubs', value: 'queen', color: 'black'},
    {cardSuit: 'clubs', value: 'king', color: 'black'},
    {cardSuit: 'clubs', value: 'ace', color: 'black'},
    {cardSuit: 'heart', value: '6', color: 'red'},
    {cardSuit: 'heart', value: '7', color: 'red'},
    {cardSuit: 'heart', value: '8', color: 'red'},
    {cardSuit: 'heart', value: '9', color: 'red'},
    {cardSuit: 'heart', value: '10', color: 'red'},
    {cardSuit: 'heart', value: 'jack', color: 'red'},
    {cardSuit: 'heart', value: 'queen', color: 'red'},
    {cardSuit: 'heart', value: 'king', color: 'red'},
    {cardSuit: 'heart', value: 'ace', color: 'red'},
    {cardSuit: 'diamond', value: '6', color: 'red'},
    {cardSuit: 'diamond', value: '7', color: 'red'},
    {cardSuit: 'diamond', value: '8', color: 'red'},
    {cardSuit: 'diamond', value: '9', color: 'red'},
    {cardSuit: 'diamond', value: '10', color: 'red'},
    {cardSuit: 'diamond', value: 'jack', color: 'red'},
    {cardSuit: 'diamond', value: 'queen', color: 'red'},
    {cardSuit: 'diamond', value: 'king', color: 'red'},
    {cardSuit: 'diamond', value: 'ace', color: 'red'},
];
// for (let cardSuit of ['spade', 'diamond','heart', 'clubs'])
//     for (let value=6; value<=14;value++)
//         cards.push({cardSuit, value});
console.log(cards);
// - знайти піковий туз
let ace = cards.find(c => c.value==='ace' && c.cardSuit==='spade');
console.log(ace);
// - всі шістки
const filtered =cards.filter(c =>c.value==='6');
console.log(filtered);
// - всі червоні карти

// - всі буби
const filteredD =cards.filter(c =>c.cardSuit==='diamond');
console.log(filteredD);
// - всі трефи від 9 та більше
const clubs = cards.filter((c)=>c.cardSuit === 'clubs'&& ['9','10','jack','queen','ace'].includes(c.value))
console.log(clubs);
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

const reduce = cards.reduce((accumulator, card)=> {
    switch (card.cardSuit) {
        case 'spades':
            accumulator.spade.push(card);
            break;
        case 'diamonds':
            accumulator.diamond.push(card);
            break;
        case 'hearts':
            accumulator.heart.push(card);
            break;
        case 'clubs':
            accumulator.club.push(card);
            break;
    }
    return accumulator;

    },{spade:[], diamond:[], heart:[], club:[]});

console.log(reduce);

const cards4 = cards.reduce((acc, cur) => {
    switch (cur.cardSuit) {
        case 'spade':
            acc.spades.push(cur);
            break;
        case 'clubs':
            acc.clubs.push(cur);
            break;
        case 'heart':
            acc.hearts.push(cur);
            break;
        case 'diamond':
            acc.diamonds.push(cur);
            break;
    }
    return acc;
}, {spades: [], clubs: [], hearts: [], diamonds: []});

console.log(cards4);

// =========================
//     взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];
// --написати пошук всіх об'єктів, в який в modules є sass
console.log(coursesArray.filter((c) => c.modules.includes('sass')));
// --написати пошук всіх об'єктів, в який в modules є docker
console.log(coursesArray.filter((c)=> c.modules.includes('docker')));