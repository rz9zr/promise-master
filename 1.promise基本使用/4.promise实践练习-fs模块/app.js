function mineReadFile(path) {
    return new Promise((resolve, reject) => {
        require('fs').readFile(path, (err, data) => {
            if (err) {
                reject(err);
            }
            resolve(data);
        });
    });
}

mineReadFile('./app.js')
    .then(data => console.log(data.toString()))
    .catch(reason => console.error(reason.message));
