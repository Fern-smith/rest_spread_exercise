
const doubleAndReturnArgs = (arr, ...args) => [...arr, ...args.map(arg => arg * 2)];

//Example usage: 
console.log(doubleAndReturnArgs([1,2,3],4,4));
//Output: [1,2,3,8,8]
console.log(doubleAndReturnArgs([2],10,4));
//Output: [2,20,8]