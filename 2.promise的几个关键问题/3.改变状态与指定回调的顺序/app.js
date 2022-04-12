//const p = new Promise((resolve, reject) => {
//console.log('改变状态');
//resolve('OK');
//});
const p = new Promise((resolve, reject) => {
    setTimeout(()=> {
        console.log('改变状态');
        resolve('OK');
    }, 1000);
});

p.then(value => {
    console.log('指定回调', value);
}, reason=>{console.log(reason)});
