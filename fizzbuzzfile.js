/*count from 1 to a given number (let’s say 100). For each number if it’s not divisible by 3 or 5, you simply say the number.
If it’s divisible by 3, instead of the number you say “fizz”. If it’s divisible by 5, you say “buzz”. 
And finally if it’s divisible by both 3 and 5, you say “fizz buzz”. 
So, counting from one to fifteen, you’d say: “One, two, fizz, four, buzz, fizz, seven, eight, fizz, buzz, eleven, fizz, thirteen, fourteen, fizz buzz”. */


for (var i = 1; i <100; i++) {
	 if ((i%3 === 0) && (i%5 === 0)) {
			console.log("fizzbuzz")
	}else if (i%3 === 0) {
		console.log("fizz");
	} 
		else if (i%5 === 0) {
			console.log("buzz");
		} else {console.log(i)}
}