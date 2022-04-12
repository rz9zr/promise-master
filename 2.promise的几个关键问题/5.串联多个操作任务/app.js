// promise 的 then() 返回一个新的 promise，可以进行链式调用
// 通过 then() 的链式调用，串联多个同步/异步任务

const p = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('OK');
    }, 100)
});

p.then(v => Promise.resolve(`SUCCESS ${v}`))
    .then(v => console.log(v))
    .catch(e => console.error(e));
