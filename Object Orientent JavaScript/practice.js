// Practice Files : Object Orientent JavaScript =>


/*// Constructor Pattern:
function BookList(name,author,publisher,year) {
	this.name = name;
	this.author = author;
	this.publisher = publisher;
	this.year = year;
}

// Prototype :
BookList.prototype =  {
	summary() {
		var year = new Date().getFullYear() - this.year;
		console.log(`${this.name} is written by ${this.author} ${year} years ago`);
	} ,
	ratings() {
		console.log(`${this.name} is a top rated and best seller Book of ${this.year}`)
	}
}

// // Creating Objects
var book1 = new BookList('the old man and the sea' ,'Wornest Homingway','British',1990);
var book2 = new BookList('Galivar Travels','Johnerthon Swift','Unknown publisher',1980)


book1.summary();
book2.summary();

book1.ratings();
book2.ratings();
*/


/*// bind, call, apply Method:

// Our Objects
const book = {
	name: 'Galivar Travels',
	author: 'Johnerthon Swift',
	publisher: 'Travelers Publications',
	year: 1980,
	Price: '$40'
}

// Function: 
function bookInfo() {
	var year = new Date().getFullYear() - this.year;
	console.log(`${this.name} is written by ${this.author} ${year} years ago`);
}

// bind Method:
var bindedData = bookInfo.bind(book);
bindedData();

// call Method:
var calledData = bookInfo.call(book);

// apply Method:
var appliedData = bookInfo.apply(book);


// Object Travers:
const book = {
	name: 'Galivar Travels',
	author: 'Johnerthon Swift',
	publisher: 'Travelers Publications',
	year: 1980,
	Price: '$40'
};

for(let keys in book) {
	console.log(`${keys} = ${book[keys]}`);
};
*/




/*// prototype Inheritance :

// parent class:
function Person(name,age,occupation) {
	this.name = name;
	this.age = age;
	this.occupation = occupation;
};


// prototype : Methods 
Person.prototype = {
	info(occupation) {
		if(this.occupation === 'student') {
			console.log(`${this.name} is a ${this.occupation} . His age is ${this.age} and id is ${this.id} `);
		} else if(this.occupation === 'teacher') {
			console.log(`${this.name} is a ${this.occupation} and his subject is ${this.subject}`);
		} else {
			console.log('No data found !! Try again');
		}	
	},
	email: 'info@website.com',
	leisure() {
		if(this.occupation === 'student') {
			console.log(`Hello ${this.name}, Don't waste time.though it's leisure , try learning something new`);
		} else if(this.occupation === 'teacher') {
			console.log(`Hello ${this.name}, Just have some fun and make teaching more funny but effective.Good luck.`);
		}
	}
}

// prototype inheritance :
Student.prototype = Object.create(Person.prototype)
Teacher.prototype = Object.create(Person.prototype)

// child class
// student
function Student(name,age,occupation,id) {
	this.id = id;
	Person.call(this,name,age,occupation);
};
// teacher
function Teacher(name,age,occupation,subject) {
	this.subject = subject;
	Person.call(this,name,age,occupation);
}

// Our Objects:
var student1 = new Student('John Carter',30,'student',1720);
var teacher1 = new Teacher('Willium David',30,'teacher','JavaScript');

student1.info();
teacher1.info();

student1.leisure();
teacher1.leisure();
*/



// Medicine: Carasole cr








// Practice : Online resource of javaScript =>


// Prototype Inheritance: using __proto__
// using __proto__ => Data are changeable : 
// if the parent object have a specific property value , it's all child object have the right of changing it because __proto__ is writeable.

/*let animal = { 
	eats : true,
	sleep : true,
	jump:false, // here jump is false but for rabbit jump is true
	info : function() {
		console.log('Do something quickly');
	}
};

let rabbit = { 
	jump:true,
	__proto__ :animal // Prototype Inheritance 
};

let cat = {
	leg:2,
	tail:true,
	__proto__ :rabbit // Prototype Inheritance chain
}
// Over writing the parent's info function. 
cat.info = function() {
	console.log('Do Nothing for now')
}

cat.jump // true
cat.sleep // true

rabbit.eats // true
rabbit.jump // true
*/



/*
// Asyncronus : 

function example() {
	var x = 10;
	console.log('Now x = ',x);

	setTimeout(function() {
		x = 15;
		console.log('In timeOut function - 5 Second later :  x is ',x);
	},5000);

	console.log('I am out of setTimeOut Function');
};

// console.log('i am Out of main Function');


// example()

function getVar() {
	var x;
	setTimeout(() => {
		x = 15;
		console.log(`Function has run  for 2 second `);
	},2000);


	setTimeout(() => {
		console.log(`5 Second later : value is : ${x} `);
	},5000);

	return x;

}

// var velue = getVar();
// console.log(`Value is : ${velue}`);
*/

/*// Distuctring Object:


const user = {
	name:'Shaon Kabir',
	age : 21,
	country: 'Bangladesh',
	email: 'shaonkabir98@gmail.com'
}

const {email: userEmail,...restUser } = user;

console.log(restUser);*/


// Exam : javaScript.info
// Prototype Chain's Best Example
let head = {
  glasses: 1
};

let table = {
  pen: 3,
  __proto__ : head
};

let bed = {
  sheet: 1,
  pillow: 2,
  __proto__ : table
};

let pockets = {
  money: 2000,
  __proto__ : bed
};


// Constructor Function : 

function Animal(name) {
	this.name = name;
	console.log(name);
}

var cat = new Animal('flufykings');

console.log(cat);
// even we can create objects from cat after preparing as a Constructor
var anotherCat = new cat.constructor('Pussy cat');









