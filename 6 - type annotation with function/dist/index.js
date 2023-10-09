"use strict";
let showMssg = true;
const showDetails = (name, age, salary) => {
    let today = 2022;
    if (showMssg) {
        return `hello ${name}, age is ${today - age}, salary is ${salary}`;
    }
    return 404;
};
console.log(showDetails('Mohamed', 1996, 20000.5));
//# sourceMappingURL=index.js.map