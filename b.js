const queryDB = require('./db')

Promise.all([
    queryDB('Select * from "Product"', []),
    queryDB('Select * from "Product" where id = 12', [])
]).then((x)=> console.log(x[1].rows))