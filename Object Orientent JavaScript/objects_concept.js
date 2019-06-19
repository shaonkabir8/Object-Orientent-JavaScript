/****************************************
	// Object Orientent JavaScript # Date : 29.05.2019 : 05.26 PM

	* Outside of an object a Function is just an Object(value) .
	* Inside of an Object a Function isn't function . that's Called "METHOD"
*/


// Objects Syntax : using Modern JavaScript (ES6)

//const obj = {
//	Key : 'Value',
//	Key : 'Value',
//	functionName() { // It's not function now , it's a Method ......!! 
//		// Statements
//	}
//}


// Simple object which contains a list of books
const book = {
	name : 'The Old man and the sea',
	author : 'Wornest Homeingway',
	pushlishers : 'British Publications',
	date : '1980',
	rating : '5 Star',
	overView() {
		console.log(`${this.name} is written by ${this.author} in ${this.date}`);
	}
}
console.log(book);
book.overView();
// We can add items even Methods to this object outside of it.
// Example...

book.page = 320; // we push data from outside of the object and access to it.
console.log(`Total Page of - ${book.name} is ${book.page}`);

// Even we can push Methods to it.....

book.compare = function() {
	console.log(`${book.name} is an award winner book of ${book.date}`);
};
book.compare();

// Object Travers 
// We'll do it using for....in loop =>

console.log(`Object Travers using for.......in Loop`)
for(let property in book) {
	//console.log(property);
	
	console.log(`${property} = ${book[property]}`); // Property and value
};
