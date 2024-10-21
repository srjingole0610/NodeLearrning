const _loadash = require("lodash");

const items = [1, [2, [3, [4, 5]]]];

const newItems = _loadash.flattenDeep(items);

console.log(newItems);
console.log("Hello World");
console.log("Hello Nodemon");
