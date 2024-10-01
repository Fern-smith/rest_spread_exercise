

/** remove a random element in the items array
and return a new array without that item. */

const removeRandom = items => {
    const idxToRemove = Math.floor(Math.random() * items.length);
    return [...items.slice(0,idxToRemove), ...items.slice(idxToRemove + 1)];

}

//Example Usage 
const items = [1,2,3,4,5];
const newArray = removeRandom(items);
console.log(newArray);

/** Return a new array with every item in array1 and array2. */

const extend = (array1, array2) => {
    return [...array1, ...array2];
}

//Example Usage 
const array1 = [1,2,3];
const array2 = [4,5,6];
const extendArray = extend(array1, array2);
console.log(extendArray);

/** Return a new object with all the keys and values
from obj and a new key/value pair */

const addKeyVal = (obj, key, val) => {
    let newObj = { ... obj}
    newObj [key] = val;
    return newObj;
}

//Example Usage 
let addObj = {a:1, b:2};
let addNewObj = addKeyVal(addObj, 'c', 3);
console.log(addNewObj);

/** Return a new object with a key removed. */

const removeKey = (obj, key) => {
    let newObj = { ...obj}
    delete newObj [key]
    return newObj;
}

//Example Usage 
let removeObj = {a:1, b:2, c:3};
let removeNewObj = removeKey(removeObj, 'b');
console.log(removeNewObj);

/** Combine two objects and return a new object. */

const combine = (obj1, obj2) => {
    return { ...obj1, ...obj2};
}

// Example Usage 
const obj1 = {a: 1, b:2};
const obj2 = {c:3, d:4, f:5};
const combineObj = combine(obj1,obj2);
console.log(combineObj);

/** Return a new object with a modified key and value. */

const update  = (obj, key, val) => {
    let newObj = { ...obj}
    newObj [key] = val;
    return newObj;
}

//Example Usage 
const object = {a:1, b:2, c:3}
const updateObj = update(object, 'b', 4);
console.log(updateObj);
