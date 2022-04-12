// 生成随机数
function rand(m, n) {
    return Math.ceil(Math.random() * (n-m+1)) + m-1;
}

// 点击按钮
// 2秒后显示是否中奖（30%概率）
// 若中奖：恭喜恭喜，奖品为10W RMB 劳斯莱斯优惠券
// 若未中奖：再接再厉
const btn = document.querySelector('#btn');
btn.addEventListener('click', ()=>{
    //setTimeout(()=>{
        //const n = rand(1, 100);
        //if(n<=30) {
            //alert('恭喜恭喜，奖品为 10W RMB 劳斯莱斯优惠券');
        //} else {
            //alert('再接再厉');
        //}
    //},2000);

    const p = new Promise((resolve, reject) => {
        setTimeout(()=>{
            const n = rand(1,100);
            if(n<=30){
                resolve(n);
            } else {
                reject(n);
            }
        },2000);
    });
    p.then( value => {
        alert(`恭喜恭喜，奖品为 10W RMB 劳斯莱斯优惠券。【中奖号码为：${value}】`)
    }, reason => {
        alert(`再接再厉【号码为：${reason}】`)
    } );
});
