type Buttons = {
	up: string,
	down: string,
	right: string,
	left: string,
}

type Last = Buttons & {
	x: boolean,
}

function getActions(btns: Last): void {
	console.log(`Actions for buttons up is ${btns.up}`);
	console.log(`Actions for buttons down is ${btns.down}`);
	console.log(`Actions for buttons right is ${btns.right}`);
	console.log(`Actions for buttons left is ${btns.left}`);
}

getActions({ up: 'Jump', x: true, down: 'go down', right: 'go right', left: 'go left' })