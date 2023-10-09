function addAll(...nums: number[]): number {
	let result: number = 0;

	nums.forEach(element => {
		result += element
	});

	return result;
}

console.log(addAll(10, 20, 30, +true)); /*trick to convert boolean to numbers*/