"use strict";
function getActions(btns) {
    console.log(`Actions for buttons up is ${btns.up}`);
    console.log(`Actions for buttons down is ${btns.down}`);
    console.log(`Actions for buttons right is ${btns.right}`);
    console.log(`Actions for buttons left is ${btns.left}`);
}
getActions({ up: 'Jump', x: true, down: 'go down', right: 'go right', left: 'go left' });
//# sourceMappingURL=index.js.map