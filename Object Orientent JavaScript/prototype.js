// JavaScript Prototype 

function BookList(name,author,price) {
	this.name = name;
	this.author = author;
	this.price = price;
};

// function for our Class 'BookList'
BookList.prototype = {
	// methods of our class are Organized here

	// we can pass function using __proto__  
	hello : function() {
		console.log(`Hello Annonymous , Welcome to our JavaScript Class practice `)
	},

	// Those are written below in ES6
	summery() {
		console.log(`${this.name} was written by ${this.author} . It's price is ${this.price}`)
	},
	print() {
		console.log(`Book name is : ${this.name}`);
	},
	// we can pass any key using proto:
	email: 'info.website@domain.com'
}



var book1 = new BookList ('The Old Man and the Sea' ,'wornest Homingeway','$250');
var book2 = new BookList ('Dragon History','Fluffykings','$150');


console.log(book1);

book2.summery();
book1.print();
book1.hello();