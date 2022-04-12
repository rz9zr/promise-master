// 如果传入的参数为非Promise对象，返回的结果为成功的Promise对象
const p1 = Promise.resolve(9981);
p1.then(v => console.log('p1', v))

// 如果传入的参数为Promise对象，参数的结果决定了返回值的结果
const p2 = Promise.resolve(new Promise((resolve, reject) => {
    reject(9527)
}));
p2.catch(v => console.log('p2', v) , e => console.warn('p2', e));
