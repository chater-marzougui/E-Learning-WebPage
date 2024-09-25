import { auth } from "./firebase.js";
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-auth.js";

const form = document.querySelector('form');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');

const token = document.cookie.split('token=')[1];
if (token) {
    alert('Already signed in');
    window.location.href = './home.html';
}

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = emailInput.value;
    const password = passwordInput.value;

    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        if (user.accessToken) {
            alert('Sign-in successful!');

            const d = new Date();
            d.setTime(d.getTime() + (30*1000));
            document.cookie = `token=${user.accessToken} ; expires=${d.toUTCString()} ; path=/`; 
            document.cookie = `mail=${email} ; expires=${d.toUTCString()} ; path=/`; 
            window.location.href = './home.html';
        }
    } catch (error) {
        console.log(error);
        if (error.code === 'auth/user-not-found') {
            alert('User not found');
        } else if (error.code === 'auth/wrong-password') {
            alert('Incorrect password');
        } else if (error.code === 'auth/invalid-email') {
            alert('Invalid email');
        } else if (error.code === 'auth/invalid-credential') {
            alert('Invalid credentials');
        } else {
            alert('Error signing in');
        }
    }
});
