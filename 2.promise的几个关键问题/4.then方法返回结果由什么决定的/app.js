const p = new Promise((resolve,reject)=> {
    resolve('OK');
})

const result = p.then( v => {
    //console.log('RESOLVED: ', v);
    // 1. 抛出错误
    //throw '出了问题';
    // 2. 返回结果是非 Promise 对象
    //return 'OK';
    // 3. 返回结果是一个 Promise 对象，结果由这个对象决定
    //return Promise.resolve('SUCCESS');
    return Promise.reject('ERROR');
}).catch(e => console.warn('REJECTED: ', e));

console.log('RESULT OF then:', result);
