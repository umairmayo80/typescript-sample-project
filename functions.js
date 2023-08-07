"use strict";
// generic functions
function getItems(items) {
    return new Array().concat(items);
}
let concatResult = getItems([1, 2, 3, 4, 5]);
let concatString = getItems(['a', 'b', 'c']);
console.log(concatResult);
console.log(concatString);
