// arrays and blocks
// 1 step
let device = ['monitor', 'keyboard', 'mouse', 'laptop', 'printer', 'shredder', 'tablet', 'smartphone', 'memoryStick', 'camera'];
console.log(device.length);
console.log(device[0]);
console.log(device[1]);
console.log(device[2]);
console.log(device[3]);
console.log(device[4]);
console.log(device[5]);
console.log(device[6]);
console.log(device[7]);
console.log(device[8]);
console.log(device[9]);
// 2 step
let book1 = {
    title: 'Bilingual Visual Dictionary',
    pageCount: 360,
    genre: 'dictionary'
}
console.log(book1);
let book2 = {
    title: 'GOOGLE, How Google Works',
    pageCount: 304,
    genre: 'computer technology'
}
console.log(book2);
let book3 = {
    title: 'Head First JavaScript Programming',
    pageCount: 671,
    genre: 'directory'
}
console.log (book3);
// 3 step
let book1array = {
    title: 'Bilingual Visual Dictionary',
    pageCount: 360,
    genre: 'dictionary',
    authors: [{
        name: 'DK group',
        age: 79
    }]
}
console.log (book1array);
let book2array = {
    title: 'GOOGLE, How Google Works',
    pageCount: 304,
    genre: 'computer technology',
    authors: [{
        name: 'Jonathan Rosenberg',
        age: 62
    }]
}
console.log (book2array.authors);
let book3array = {
    title: 'Head First JavaScript Programming',
    pageCount: 671,
    genre: 'directory',
    authors: [{
        name: 'Eric T. Freeman',
        age: 58
    }]
}
console.log (book3array.authors);
// 4 step
let users =[
    {name: 1, username: 'James' ,password: 16252116 },
    {name: 2, username: 'Michael' ,password: '1f3647h6'},
    {name: 3, username: 'Barbara' ,password: 56984328},
    {name: 4, username: 'Thomas' ,password: '364d856f47'},
    {name: 5, username: 'Karen' ,password: 268443657},
    {name: 6, username: 'Lisa' ,password: '254rb9832h5'},
    {name: 7, username: 'Anthony' ,password: 4698524434},
    {name: 8, username: 'Ashley' ,password: 254935587},
    {name: 9, username: 'Andrew' ,password: '97dg1gh564328jj'},
    {name: 10, username: 'Melissa' ,password: 36574692}
]
console.log (users [0].password);
console.log (users [1].password);
console.log (users [2].password);
console.log (users [3].password);
console.log (users [4].password);
console.log (users [5] ['password']);
console.log (users [6] ['password']);
console.log (users [7] ['password']);
console.log (users [8] ['password']);
console.log (users [9] ['password']);

// logical branching

// 1 step

let x = 4;
if (x !== 0){
    console.log('true')
}else{
    console.log('false')
}

// 2 step

// let time = prompt ('What part of an hour!');
// if (time >=0&&time <=14){
//     console.log ('I');
// } else if (time >=15&&time <=29){
//     console.log ('II');
// } else if (time >=30&&time <=44){
//     console.log ('III');
// } else if (time >=45&&time <=59){
//     console.log ('VI');
// } else {
//     console.log ('What do you want to know?')
// }

// 3 step

// let day =prompt ('Decade of the month!');
// if (day >=1&& day <=10){
//     console.log ('I decade');
// } else if (day >=11&& day <=20){
//     console.log ('II decade');
// } else if (day >=21&&day <=31){
//     console.log ('III decade')
// }

// 4 step

// let week = prompt('Timetable for week');
// switch (week){
//     case '1':
//         console.log('consultation');
//         break;
//     case '2':
//         console.log('lecture');
//         break;
//     case '3':
//         console.log ('consultation');
//         break;
//     case '4':
//         console.log ('lecture');
//         break;
//     case '5':
//         console.log ('consultation');
//         break;
//     case '6':
//         console.log ('english');
//         break;
//     case '7':
//         console.log ('holiday')
// }

// 5 step

let y = 12;
let a = 18;
if (y > a){
    console.log (y);
}else if (y < a){
    console.log(a);
}else if (y === a){
    console.log ('same')
}
console.log(typeof y);

// 6 step

let variable = prompt('false')
let boolean = (confirm());
if (variable || boolean){
    console.log('default');
}

// 7 step
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
console.log(coursesAndDurationArray [0].monthDuration );
if (coursesAndDurationArray [0].monthDuration > 5){
    console.log ('Cool!');
}
if (coursesAndDurationArray [1].monthDuration > 5){
    console.log ('Cool!');
}
if (coursesAndDurationArray [2].monthDuration > 5){
    console.log ('Cool!');
}
if (coursesAndDurationArray [3].monthDuration > 5){
    console.log ('Cool!');
}
if (coursesAndDurationArray [4].monthDuration > 5){
    console.log ('Cool!');
}
if (coursesAndDurationArray [5].monthDuration > 5){
    console.log ('Cool!')
}
