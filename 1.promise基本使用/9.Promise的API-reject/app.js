// 无论传入的参数是什么，结果都是失败的Promise
const p1 = Promise.reject(111);
p1.then(v => console.log('p1', v)).catch(e => console.warn('p1 err:', e));

const p2 = Promise.reject(new Promise((resolve, reject) => {
    resolve(999);
}));
p2.then(v => console.log('p2', v)).catch(e => console.warn('p2 err:', e));
