const main = document.getElementById('main');
const gologin = document.getElementById('gologin');

const token = document.cookie.split('token=')[1];
if (!token) {
    main.style.display = 'none';
    gologin.style.display = 'block';
}

if (token) {
    main.style.display = 'block';
    gologin.style.display = 'none';
}