const add = require('./add.js');
const subtract = require('./subtract.js');
const multiple = require("./multiple.js");
const divide = require("./divide.js"); 


const main = (a,b) => {
    console.log(add(a,b))
    console.log(subtract(a,b))
    console.log(multiple(a,b))
    console.log(divide(a,b))
}

main(10, 5);
main(15,  3);

