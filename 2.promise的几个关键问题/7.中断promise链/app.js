// 在回调用函数中，返回一个 pending 状态的 promise 对象

const p = Promise.resolve('OK');

p.then(v => `SUCCESS ${v}`)
    .then(v => new Promise(() => { })) // 返回一个pending状态的promise，中断调用链
    .then(v => Promise.resolve(`AGAIN ${v}`))
    .then(v => console.log(v))
    .catch(e => console.error(e));
