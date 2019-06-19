// __Prototype__ Inheritance


// Our Main Class
function Objects(name,id,date,subject) {
	this.name = name; 
	this.id = id;
	this.date = date;
	this.subject = subject; 
}

// Student Methods
Students.prototype = {
	summary() {
		console.log(`I am ${this.name}. My Id is ${this.id}. My Date of Birth is ${this.date}. `);
	}
}

// Teachers Method
Teachers.prototype = {
	introduce() {
		console.log(`Hello, I am ${this.name}. I am a teacher of ${this.subject}`)
	},
	email:'info@teachesName.com'
}

// // Prototype Inharitance : for Students
// Students.prototype = Object.create(Objects.prototype)

// // Prototype Inharitance : for Teachers
// Teachers.prototype = Object.create(Objects.prototype)


// Student Class
function Students(name,id,date) {
	Objects.call(this ,name,id,date);
}

// Teacher Class
function Teachers(name,subject) {
	Objects.call(this,name);
	this.subject = 'JavaScript'
}


var student1 = new Students('Shaon ','100','1998');
var student2 = new Students('Kabir','200','2019');
var student3 = new Students('Unknown','300','2000');

student1.summary();
 

// Teachers Data
var teacher1 = new Teachers('Shaon Kabir');
var teacher2 = new Teachers('Jack Sparrow');
var teacher3 = new Teachers('Macbel Fogus');


teacher3.introduce();
teacher1.introduce();


console.clear() // To Prevent Executing previous codes on Console.


// Objects Keys and Values
var keys = Object.keys(teacher1);
console.log(keys);

var values = Object.values(teacher1);
console.log(values);


console.clear() // To Prevent Executing previous codes on Console.


// Another Class for more fun
function Book(name,author,year) {
	this.name = name; 
	this.author = author;
	this.year = year;
}

Book.prototype.getAgeCalculator = function() {
	const year = new Date().getFullYear() - this.year;
	return `${this.name} is ${year} years old`
}

Book.prototype.bookSummery = function() {
	const year = new Date().getFullYear() - this.year;
	return `${this.name} is written ${year} years ago by ${this.author}`
}

var book1 = new Book('Galivar Travels','Johnerthon Swift' ,'1998');
var book2 = new Book('the old man and the sea' ,'Warnest Homingeway','1980');

console.log(book1.getAgeCalculator());
console.log(book1.bookSummery());

console.log(book2.getAgeCalculator());
console.log(book2.bookSummery());


console.clear() // To Prevent Executing previous codes on Console.



// Calculation of my age:
function Age(day,month,year) {
	this.day = day;
	this.month = month;
	this.year = year;
}

Age.prototype.MyAgeCalculation = function() {
	const day = new Date().getDate() - this.day;
	const month = new Date().getUTCMonth() - this.month;
	const year = new Date().getUTCFullYear() - this.year;

	return `Your age is : ${year} years ${month} month and ${day} days `
}

var myAge = new Age('17','4','1998');
console.log(myAge.MyAgeCalculation());
