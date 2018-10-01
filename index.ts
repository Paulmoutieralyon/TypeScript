function hello(name: string) {
	console.log("hello " + name);
}

let firstName  = "bob";

hello(firstName);
hello(firstName + " marley");

function concat(a: string, b:string) {
	return a + b
}

let wcs = concat('Wild', concat(' Code', ' School'));
console.log(wcs);
