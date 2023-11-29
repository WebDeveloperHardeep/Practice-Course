// for loops 
// for(i = 0; i <= 10; i++){
//     console.log(`For loop number: ${i}`);
// }

// While Loops

// let i = 0;
// while(i < 10){
//     console.log(`While Loop Number: ${i}`)
//     i++;
// }

// How to loop through array we could use a for loop

// const todos = [
//     {
//         id: 1,
//         text: 'Tale out trash',
//         inCompleted: true
//     },
//     {
//         id: 2,
//         text: 'Meeting with boss',
//         inCompleted: true
//     },    {
//         id: 3,
//         text: 'Dentist Appt',
//         inCompleted: false
//     }
// ];

// for(let i=0; i < todos.length; i++){
//     // console.log(`For Loop Number : ${i}`)
//     console.log(todos[i].text);
// }
// How to loop through array we could use a for loop
// ========================================================

// Other Method For of loop
<<<<<<< HEAD
// const todos = [
//     {
//         id: 1,
//         text: 'Tale out trash',
//         isCompleted: true
//     },
//     {
//         id: 2,
//         text: 'Meeting with boss',
//         isCompleted: true
//     },    {
//         id: 3,
//         text: 'Dentist Appt',
//         isCompleted: false
//     }
// ];
// /const todos = [
//     {
//         id: 1,
//         text: 'Tale out trash',
//         isCompleted: true
//     },
//     {
//         id: 2,
//         text: 'Meeting with boss',
//         isCompleted: true
//     },    {
//         id: 3,
//         text: 'Dentist Appt',
//         isCompleted: false
//     }
// ];
// For of loop
// for(let todo of todos){
//     console.log(todo.text)
// }

// for each, map, filter

// todos.forEach(function(todo){
// console.log(todo.text);
// })

// Map
// const todoText = todos.map(function(todo){
//     return todo.text;
// });

// console.log(todoText);

// Filter

// const todoCompleted = todos.filter(function(todo){
//         return todo.isCompleted === true;
//     }).map(function(todo){
//         return todo.text;
//     })
    
//     console.log(todoCompleted);