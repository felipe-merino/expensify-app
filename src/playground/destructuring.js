//Object Destructuring

// const person = {
//   name: 'Hari',
//   age: 2.2,
//   location: {
//     city: 'Santiago',
//     temp: 28
//   }
// };

// const {name = 'Seldon', age} = person;

// console.log(`${name} is ${age}.`);

// const {city, temp: temperature} = person.location;

// console.log(`It's ${temperature} in ${city}.`);

// const book = {
//   title: 'La formacion de Estados Unidos', 
//   author: 'Isaac Asimov',
//   publisher: {
//     name: 'McGraw Hill'
//   }
// }

// const {name: publisherName = 'Self-Published'} = book.publisher;

// console.log(publisherName);

//Array Destructuring

const adress = ['Calle Poniente 9375', 'Santiago', 'Region Metropolitana', '751450'];

const [, city, region] = adress;

console.log(`You are in ${city}, ${region}.`)

const item = ['Coffee (hot)', '$2.00' ,'$2.50', '$2.75']

const [itemName, , mediumPrice] = item;

console.log(`A medium ${itemName} costs ${mediumPrice}`)


