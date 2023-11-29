// var. let , const
// 1.
// let age = 30; // if i use const then i get error;
//age = 31;
// console.log(age);
// 2.
// const score = 10;
// console.log(score);

// String, Numbers, Bolean, null, Undefined
// const name =`john`;
// const age = 30;
// const rating = 4.5;
// const isCool =true;
// const x = null;
// const y = undefined;
// let z;
// console.log(typeof name);
// console.log(typeof age);
// console.log(typeof rating);
// console.log(typeof isCool);
// console.log(typeof x);
// console.log(typeof y);
// console.log(typeof z);
// /=================================================/

// const name = `john`;
// const age = 30;
// concatenation
// console.log(`My name is ` + name + ` and I am ` + age);
// =====================================================
// Template String
// const hello = `My is ${name} And I am ${age}`;
// console.log(hello);

// ====================================================
// couple string properties and methods 
// const s =`hello world`;
// const r = `technology, computer, it, code`
// console.log(s.length);
// console.log(s.toUpperCase);
// console.log(s.toLocaleLowerCase);
// console.log(s.substring(0, 5).toUpperCase());
// console.log(r.split(', '));

// ====================================================

// Arrays - Varibles that hold multiple values
// create array with numbers
// const numbers = new Array(1,2,3,4,5,6,7);
// console.log(numbers);

// create array with strings

// const fruits =['apples', 'oranges','pears', 'mango', 10, true];
// fruits[3] = 'grapes'; // add into the last of fruits array
// fruits.push('mangoes');// add into the last of fruits array
// fruits.unshift( 'banana');//// add into First of fruits array
// fruits.pop();
// console.log(Array.isArray('Hello'));
// console.log(fruits.indexOf('pears'));
// console.log(fruits);

// Object Literals in javascript

const person ={
    firstName:'john',
    lastName:'Doe',
    age:30,
    hobbies:['music', 'movies', 'sports'],
    address: {
        street:'50 main st',
        city: 'Boston',
        state: 'MA'
    }
}
// console.log(person.firstName, person.lastName);
// console.log(person.hobbies[1], person.address.city)

//Destructuring
// const {firstName, lastName, address: {city}} = person;
// console.log(city)

person.email = 'john@gmail.com'; // add emial into person array
console.log(person);