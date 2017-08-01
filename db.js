const pg = require('pg');
const fs = require('fs');

const pool = new pg.Pool({
        host: 'localhost',
        port: 5432,
        database: 'NODEJS2906',
        password: 'Tuth@21293',
        max: 20,
        idleTimeoutMillis: 1000,
        user: 'postgres'
    });
// const pool = new pg.Pool({
//         host: 'ec2-107-20-250-195.compute-1.amazonaws.com',
//         port: 5432,
//         database: 'd6cebfumemmkn2',
//         password: '8e0f3a3e8451c3e00111c4b7cb66fe3aa1425882277efed5e69bcecdf294a931',
//         max: 20,
//         idleTimeoutMillis: 1000,
//         user: 'ewenhuwklbptgw'
//     });

// function queryDB(sql, arrayData, cb) {
//     pool.connect((err, client, done) => {
//         if (err) return cb(err, null);
//         client.query(sql, arrayData, (errQuery, result) => {
//             done();
//             if (errQuery) return cb(errQuery, null);
//             cb(null, result);
//         });
//     });
// }

function docFile(fileName){
    return new Promise((resolve, reject)=>{
        fs.readFile(fileName, 'utf8', (err , data) => {
            if (err) return reject(err);
            resolve(data);
        });
    });
}

function queryDB(sql, arrayData){
    return new Promise((resolve, reject)=>{
        pool.connect((err, client, done) => {
            if (err) return reject(err);
            client.query(sql, arrayData, (errQuery, result) => {
                done();
                if (errQuery) return reject(errQuery);
                resolve(result);
            });
        });
    });
}

// docFile('./b.txt')
// .then((sql)=>queryDB(sql, []))
// .then(result => console.log(result.rows))
// .catch((e) => console.log(e));

// queryDB('Select * from "Product" where id = $1', [12])
// .then((result)=>console.log(result.rows))
// .catch((e)=> console.log(e.toString()));
module.exports = queryDB;