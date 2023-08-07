
// generic functions

function getItems<T> (items: T[]): T[]{
    return new Array<T>().concat(items)
}


let concatResult = getItems([1,2,3,4,5]);

let concatString = getItems<string>(['a','b','c'])

console.log(concatResult)
console.log(concatString)