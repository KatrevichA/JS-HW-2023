// for - while
// 1 step
let tops = [
    {infinitive:'be', pastSimple:'was,were', pastParticiple:'been'},
    {infinitive:'become', pastSimple:'became', pastParticiple:'become'},
    {infinitive:'bid', pastSimple:'bid', pastParticiple:'bid'},
    {infinitive:'build', pastSimple:'build', pastParticiple:'build'},
    {infinitive:'do', pastSimple:'did', pastParticiple:'done'},
    {infinitive:'eat', pastSimple:'ate', pastParticiple:'eaten'},
    {infinitive:'get', pastSimple:'got', pastParticiple:'got'},
    {infinitive:'hit', pastSimple:'hit', pastParticiple:'hit'},
    {infinitive:'let', pastSimple:'let', pastParticiple:'let'},
    {infinitive:'meet', pastSimple:'met', pastParticiple:'met'},
    {infinitive:'mishear', pastSimple:'misheard', pastParticiple:'misheard'},
    {infinitive:'mistake', pastSimple:'mistook', pastParticiple:'mistaken'},
    {infinitive:'offset', pastSimple:'offset', pastParticiple:'offset'},
    {infinitive:'outdraw', pastSimple:'outdrew', pastParticiple:'outdrawn'},
    {infinitive:'outfly', pastSimple:'outflew', pastParticiple:'outflown'},
    {infinitive:'pay', pastSimple:'paid', pastParticiple:'paid'},
    {infinitive:'predo', pastSimple:'predid', pastParticiple:'predone'},
    {infinitive:'prove', pastSimple:'proved', pastParticiple:'pru:vd'},
    {infinitive:'read', pastSimple:'read', pastParticiple:'read'},
    {infinitive:'see', pastSimple:'saw', pastParticiple:'seen'}
]
// for (let i = 0; i < tops.length-10; i++) {
//     document.write(`<div>Irregular Verbs</div>`)
//     document.write(`<div>${tops[i].infinitive}</div>`)
// }

// 2 step
// for (let top of tops) {
//     document.write(`<div>${top.infinitive} - ${top.pastParticiple}</div>`)
// }

// 3.4 step
// let i = 0;
// while (i < tops.length) {
//     let top = tops[i];
//     console.log(top);
//     i++;
//     // document.write(`<h1>Irregular Verbs</h1>`);
//     document.write(`<h1>${top.pastSimple} - ${top.pastParticiple}</h1>`)
// }

// 5 step
// let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
// document.write(`<ul>`);
// for (const listOfItem of listOfItems) {
//     document.write(`<li>${listOfItem}</li>`);
// }
// document.write(`</ul>`)

// 6 step
// let products = [
//     {
//         title: 'milk',
//         price: 22,
//         image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
//     },
//     {
//         title: 'juice',
//         price: 27,
//         image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
//     },
//     {
//         title: 'tomato',
//         price: 47,
//         image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
//     },
//     {
//         title: 'tea',
//         price: 15,
//         image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
//     },
// ];
//
// for (let i = 0; i < products.length; i++) {
//     const product = products[i];
//     document.write (`<div class="productCard">
//                    <h3>${product.title} - ${product.price}</h3>
//                    <img src="${product.image}" alt="">
// </div>`)
// }

// 7 step
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
for (const user of users) {
    if (user.status){
        // document.write(`<div>${user.name} ${user.status}</div>`);
    }else if (!user.status){
        // document.write(`<div>${user.name} ${user.status}</div>`);
    } else if (user.age > 30){
        document.write(`<div>${user.name}</div>`)
    }
}
