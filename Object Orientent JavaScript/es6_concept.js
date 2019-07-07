// Basic Class Example:
// Old Verson ( ES5 ) ==>

function Book(name,author,year) {
    this.name = name;
    this.author = author;
    this.year = year;
}

// Prototype Inheritance: Parents Methods
Book.prototype.info = function() {
    const year = new Date().getFullYear() - this.year;
    console.log(`${this.name} is written by ${this.author} ${year} years ago `);
}

// Magazine child class:
function Magazine(name,author,year,publishers) {
    Book.call(this,name,author,year);
    this.publishers = publishers;
}
// Prototype Inheritance: Childs Methods
Magazine.prototype.info = function() {
    const year = new Date().getFullYear() - this.year;
    console.log(`${this.name} is written by ${this.author} ${year} years ago . Published by ${ this.publishers}`);
}


var bookOne = new Book('The old man and the sea','Hornest Homingway',1970);
bookOne.info() // Book info will be shown


var bookTwo = new Magazine('Magazine','Unknown',2000,'Unknown Publishers')
bookTwo.info()



// Modern JavaScript : ES6 =>
// 'class' keyWord is used from modern javaScript =>



class Animal {

    // Constructor Pattern :
    constructor(name,birthDate) {
        this.name = name;
        this.birthDate = birthDate;
    };

    // Methods:

    getInfo() {
        const year = new Date().getFullYear() - this.birthDate;
        console.log(`${this.name} is ${year} years old`);
    };


};

let dragon = new Animal('Flufyfings',2000);
dragon.getInfo();

let rabbit = new Animal('Black Rabbit' , 1998);
rabbit.getInfo()



export default Animal;