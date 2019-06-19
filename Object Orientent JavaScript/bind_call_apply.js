// bind , call , apply Methods :


// Difference between call and apply =>
// we've to pass parameters separating using ( , ) = call Method 
// we've to pass parameters as an Array [parameters]  = apply



// our object :
var book = {
	name: 'The old man and the sea',
	author: 'Wornest Homingeway',
	published: '1980',
	publishers: 'British Publications Limited',
	page: '300',
	price: '£130'
}

// our Function
function summery() {
	console.log(`${this.name} was written by ${this.author} and It's price is ${this.price}`)
}
// bind Method
var bindedData = summery.bind(book);
bindedData();

// call Method
var calledData = summery.call(book)

// apply Method 
var appliedData = summery.apply(book)  



console.clear() // To Prevent Executing previous codes on Console.


// another object for have the difference of call and apply method :

function addFun(a,b) {
	return a + b + this.c
}

var obj = {
	c : 10
}
// bind
var binded = addFun.bind(obj)
console.log(binded(10,10))

// call
var called = addFun.call(obj , 10,10);
console.log(called)

// apply
var applied = addFun.apply(obj , [10,10]);
console.log(applied)  