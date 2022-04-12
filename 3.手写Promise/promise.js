function Promise(executor) {
    this.PromiseState = 'pending';
    this.PromiseResult = null;
    this.callbacks = [];
    const self = this;

    function resolve(data) {
        if (self.PromiseState === 'pending') {
            self.PromiseState = 'fulfilled';
            self.PromiseResult = data;
            self.callbacks.filter(cb => cb).forEach(callback => {
                const fn = callback.onResolved;
                if (fn) {
                    fn(data);
                }
            })
        }
    }
    function reject(data) {
        if (self.PromiseState === 'pending') {
            self.PromiseState = 'rejected';
            self.PromiseResult = data;
            self.callbacks.filter(cb => cb).forEach(callback => {
                const fn = callback.onResolved;
                if (fn) {
                    fn(data);
                }
            })
        }
    }
    try {
        executor(resolve, reject);
    } catch (e) {
        reject(e);
    }
}

Promise.prototype.then = function(onResolved, onRejectd) {
    if (this.PromiseState === 'fulfilled' && onResolved) {
        onResolved(this.PromiseResult);
    }
    if (this.PromiseState === 'rejected' && onRejectd) {
        onRejectd(this.PromiseResult);
    }
    if (this.PromiseState === 'pending') {
        this.callbacks.push({ onResolved, onRejectd });
    }

    return this;
}

Promise.prototype.catch = function(onRejectd) {
    return this.then(null, onRejectd);
}

const p = new Promise((resolve, reject) => {
    //resolve('OK');
    //reject('Error');
    //throw 'Error';
    setTimeout(() => {
        resolve('OK');
        //reject('err');
    }, 1000);
});
p.then(v => console.log(v), e => console.log(e)).then().then(v=>console.log('aaa',v));
//p.then(v => console.log(v)).catch(e => console.log(e));
//console.log(p);
