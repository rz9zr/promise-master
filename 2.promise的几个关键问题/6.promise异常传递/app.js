// 当 promise 的 then 链式调用时，可以在最后指定失败的回调
// 前面任何操作出了异常，都会传递到最后失败的回调中处理

const p = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('Oop');
    }, 100);
});
p.then(v => `SUCCESSS ${v}`)
    .then(v => Promise.reject('ERROR'))
    .then(v => { throw 'Failed' })
    .catch(e => console.log(e));
