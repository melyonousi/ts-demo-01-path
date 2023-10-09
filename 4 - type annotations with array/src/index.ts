let all: string | number | boolean

all = "any type"
all = 20
all = true

let myFriends: string[] = ["Mohamed", "Khalid", "Anouar", 10] // must respect data type

myFriends.forEach(element => {
	console.log(element.repeat(3));
});
