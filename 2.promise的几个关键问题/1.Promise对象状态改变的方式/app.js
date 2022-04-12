const p = new Promise((resolve, reject) => {
    resolve('OK'); // PENDING => SEOLVED(FULLFILLED)
    reject('Error'); // PENDING => REJECTED
    throw new Error('Error'); // PENDING => REJECTED
});

p.then(v => console.log('SEOLVED: ', v))
    .catch(e => console.log('REJECTED: ', e))
