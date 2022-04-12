const btn = document.querySelector('#btn');
btn.addEventListener('click', () => {
    const p = new Promise((resolve, reject) => {
     const xhr = new XMLHttpRequest();
    xhr.open('get', 'https://api.apiopen.top/getJoke');
    xhr.send();
    xhr.onreadystatechange = () => {
        if(xhr.readyState === 4) {
            if(xhr.status >= 200 && xhr.status < 300) {
                resolve(xhr.response);
            } else {
                reject(xhr.status);
            }
        }
    };
    });
    p.then(
        value => console.log(value),
        reason => console.log(reason)
    );
})
