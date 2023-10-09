function showData(name: string, age: number, country?: string): string /* country = optional*/ {
	return `${name} - ${2022 - age} - ${country}`
}

console.log(showData("Mohamed", 1996));

/**
 * in case
 */
 function showData_case({ name, age, country }: { name: string; age: number; country?: string; }): string /* country = optional*/ {
	return `${name} - ${2022 - age} - ${country}`
}

console.log(showData_case({ name: "Mohamed", age: 1996 }));