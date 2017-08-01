const fs = require('fs');
//Promise: la 1 doi tuong trong javascript de giai quyet bat dong bo lien tiep
//Neu co nhieu bat dong bo lien tiep nhau: phai long callback trong callback

// const vPr = new Promise((resolve, reject)=>{
//     fs.readFile('./a.txt', 'utf8', (err , data) => {
//         if (err) return reject(err);
//         resolve(data);
//     });
// });

function docFile(fileName){
    return new Promise((resolve, reject)=>{
        fs.readFile(fileName, 'utf8', (err , data) => {
            if (err) return reject(err);
            resolve(data);
        });
    });
}

docFile('./b.txt').then((x) => console.log(x)).catch((e) => console.log(e));
//vPr.then((x)=>console.log(x)).catch((e)=>console.log(e))
