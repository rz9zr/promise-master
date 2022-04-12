const fs = require('fs');

//fs.readFile('./app.js', (err,data) => {
    //if(err) {
        //throw err;
    //} 
    //console.log(data.toString());
//});

const p = new Promise((resolve, reject) => {
    fs.readFile('./app.js', (err,data)=>{
        if (err) {
            reject(err);
        }
        resolve(data);
    })
});
p.then(value => console.log(value.toString())).catch(reason => console.log(reason.message));
