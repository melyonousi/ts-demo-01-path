"use strict";
function addAll(...nums) {
    let result = 0;
    nums.forEach(element => {
        result += element;
    });
    return result;
}
console.log(addAll(10, 20, 30, +true));
//# sourceMappingURL=index.js.map