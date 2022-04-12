const p = new Promise((resolve, reject) => {
    // Promise 执行器内部是，同步调用
    console.log('11111');

    reject(new Error('foo bar'));
});
console.log(2222);
p.then(v=>console.log(v)).catch(e => console.log(e.message))


