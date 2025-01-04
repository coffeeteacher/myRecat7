
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDAAn82uiuQ2IbiocETC-K33hozc-vDGJ0",
    authDomain: "fir-oauth-dcb79.firebaseapp.com",
    projectId: "fir-oauth-dcb79",
    storageBucket: "fir-oauth-dcb79.firebasestorage.app",
    messagingSenderId: "253595175799",
    appId: "1:253595175799:web:dd6451a90625cb44caef72"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

