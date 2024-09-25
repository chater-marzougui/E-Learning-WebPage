// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-auth.js";
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-firestore.js";



const firebaseConfig = {
  apiKey: "Your API key",
  authDomain: "Your project ID.firebaseapp.com",
  projectId: "Your project ID",
  storageBucket: "your project ID.appspot.com",
  messagingSenderId: "sender ID",
  appId: "app ID"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export const auth = getAuth(app);  // Use getAuth to initialize the auth object