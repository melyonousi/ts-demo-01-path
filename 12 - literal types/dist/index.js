"use strict";
const compare = (num1, num2) => {
    if (num1 === num2) {
        return 0;
    }
    else if (num1 > num2) {
        return 1;
    }
    else {
        return -1;
    }
};
console.log(compare(20, 20));
console.log(compare(30, 20));
console.log(compare(10, 20));
//# sourceMappingURL=index.js.map