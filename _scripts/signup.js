import {auth} from './firebase.js';
import {createUserWithEmailAndPassword} from 'https://www.gstatic.com/firebasejs/10.13.2/firebase-auth.js';

const form = document.querySelector('form');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirm-password');

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const email = emailInput.value;
    const password = passwordInput.value;
    const confirmPassword = confirmPasswordInput.value;

    if (password !== confirmPassword) {
        alert('Passwords do not match');
        return;
    }

    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        console.log(`User created: ${user.email}`);
        alert('Sign-up successful!');

        window.location.href = './login.html';


    } catch (error) {
        console.error('Error signing up:', error);
        alert(error.message);
    }
});