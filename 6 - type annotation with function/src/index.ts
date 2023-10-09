let showMssg = true

const showDetails = (name: string, age: number, salary: number): string => {
	let today = 2022
	if (showMssg) {
		return `hello ${name}, age is ${today - age}, salary is ${salary}`
	}
	return 404 // must return a string data type
}

console.log(showDetails('Mohamed', 1996, 20000.5));
