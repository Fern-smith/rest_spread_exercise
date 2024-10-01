
const mergeObjects = (obj1, obj2) => ({...obj1, ...obj2})

//Example Usage

const merged = mergeObjects({a:1, b:2}, {c:3, d:4})
console.log(merged); // Output: {a:1, b:2, c:3, d3:4}