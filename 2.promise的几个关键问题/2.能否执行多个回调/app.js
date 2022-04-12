const p = new Promise((resolve, reject) => {
    resolve(1);
})

p.then(v => 1 + 2)
    .then(v => v * v)
    .then(v => console.log(v))
