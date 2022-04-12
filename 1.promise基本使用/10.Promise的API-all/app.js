// 返回一个新的promise。只有所有promise都成功才成功。只要有一个失败了，就直接失败。
const jobs = [
    Promise.resolve(111),
    Promise.reject(222),
    Promise.resolve(333),
    Promise.resolve(444),
    Promise.reject(555),
];

Promise.all(jobs)
    .then(successResults => console.log('successResults:', successResults))
    .catch(failed => console.log('failed:', failed));
