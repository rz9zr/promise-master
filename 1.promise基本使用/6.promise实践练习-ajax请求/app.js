function sendAJAX(url) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest;
        xhr.responseType = 'json';
        xhr.open("GET", url);
        xhr.send();
        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4) {
                if (!(xhr.status >= 200 && xhr.status < 300)) {
                    reject(xhr.status);
                }
                resolve(xhr.response);
            }
        }
    });
}

const btn = document.getElementById('btn');
btn.addEventListener('click', () => {
    sendAJAX('https://httpbin.org/get').then(data => console.log(data)).catch(err => console.log(err));
});
