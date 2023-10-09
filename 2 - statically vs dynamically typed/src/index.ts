// # Diffrence between Static & Dynamic type language
// ## Static typed language like [Rust, C, C++]
// > - variable types are static, once  you declare it you cannot change
// > - type a variable is known at compile time "do tpe checking at compile-type"
// > - have better performance at run-type due to not needing to check types dynamiccally 
// > - error detected earlier

// ## Dynamic typed language like [Php, Python, JavaScript]
// > - variable types are dynamic, you can always change it
// > - type checking at execution time
// > - error can be detected after execution

let age = 40
if (age > 30) {
	console.log('Good');
} else {
	console.log(age.repeat(3));
}