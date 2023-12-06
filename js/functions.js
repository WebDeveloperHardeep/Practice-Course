// Normal Functions
// function addNums(num1 = 1  , num2 = 1){
//     return num1 + num2;
// }

// console.log(addNums(10, 20));

// Arrow Functions 
// const addNums = (num1 = 1  , num2 = 1) => num1 + num2;
// console.log(addNums(10, 20));

// Construtor Functions

function person(firstName , lastName, dob){
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
    this.getBirthyear = function(){
        return this.dob.getFullYear();
    }
    this.getFullName = function(){
        return `${this.firstName} ${this.lastName}`
    }
}

person.prototype.getBirthyear = function(){
    return this.dob.getFullYear();
}

person.prototype.getFullName = function(){
    return `${this.firstName} ${this.lastName}`;
}


// Instantate object

const person1 = new person('john', 'doe', '4-3-2000')
const person2 = new person('Mary', 'Smith', '3-1-1999')

// console.log(Person2.dob)
// console.log(Person1.getBirthyear());
// console.log(Person1.getFullName());

// Class
class Person{
    constructor(firstName, lastName, dob){
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob);
    }

    getBirthyear(){
        return this.dob.getFullYear();
    }

    getFullName(){
        return `${this.firstName} ${this.lastName}`;
    }
}
console.log(person2.getFullName())
console.log(person1);





