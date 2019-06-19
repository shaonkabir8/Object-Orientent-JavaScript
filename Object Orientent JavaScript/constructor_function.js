/****************************************
	** Constructor Function : way of creating Class
*/

// Basic Syntax : Creating Class
function ConstructorFunction(name,email) {
	this.name = name;
	this.email = email;

	console.log(this.name , this.email);

};

var personOne = new ConstructorFunction('Shaon','shaonkabir98@gmail.com');
console.log(personOne)


function Person(name,id) {
	this.name = name;
	this.id = id;

	this.hello = function() {
		console.log('Hello' , this.name)
	}

}

var personOne = new Person('Shaon','2019');
var personTwo = new Person('Kabir','2019');
var personThree = new Person('JavaScript','1998');

console.log(personOne)

console.clear() // To Prevent Executing previous codes on Console.



// Another Class creation using Constructor Pattern
function BookList(name,author,price) {
	this.name = name;
	this.author = author;
	this.price = price;

	this.summeryFunction = function() {
		console.log(`${this.name} was written by ${this.author} . It's price is ${this.price}`)
	}
};

var book1 = new BookList ('The Old Man and the Sea' ,'wornest Homingeway','$250');
var book2 = new BookList ('Dragon History','Fluffykings','$150');


console.log(book1);

book2.summeryFunction();
book1.summeryFunction();