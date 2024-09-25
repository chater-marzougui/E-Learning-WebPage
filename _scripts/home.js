const sign = document.getElementById('sign');

const token = document.cookie.split('token=')[1];
if (token) {
    const mail = document.cookie.split('mail=')[1];
    const username = mail.split('@')[0];
    sign.innerText = 'Sign out';
}

if (token) {
    sign.addEventListener('click', (e) => {
        e.preventDefault();
        if (sign.innerText === 'Sign out') {
            document.cookie = 'token= ; expires=Thu, 01 Jan 1970 00:00:00 UTC ; path=/';
            document.cookie = 'mail= ; expires=Thu, 01 Jan 1970 00:00:00 UTC ; path=/';
            window.location.href = './signin.html';
        }
    });
}