const { john, peter } = require("./04-names");
const sayHiTo = require("./05-utilis");
const data = require("./06-alternativeFlavour");
require("./07-mindGrenade");

sayHiTo(john);
sayHiTo(peter);
sayHiTo("Suraj");

console.log(data);
