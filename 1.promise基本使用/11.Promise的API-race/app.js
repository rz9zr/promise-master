// 返回一个新的promise。第一个完成的 promise的结果就是最终的结果状态
const jobs = [
    new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(111);
        }, 100);
    }),
    Promise.reject(222),
    Promise.resolve(333),
    Promise.resolve(444),
    Promise.reject(555),
];

Promise.race(jobs)
    .then(success => console.log('success:', success))
    .catch(failed => console.log('failed:', failed));
