// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// 匯入firebase
import { getAuth, GoogleAuthProvider } from "firebase/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC6WMfyQUF5DZB_v-6J0eSgxRPIE50h-pQ",
  authDomain: "react-auth-ab1bf.firebaseapp.com",
  projectId: "react-auth-ab1bf",
  storageBucket: "react-auth-ab1bf.firebasestorage.app",
  messagingSenderId: "734659338904",
  appId: "1:734659338904:web:110e0bef1ff84b1c0566ed"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// 匯出
export const auth = getAuth(app);
export const provide = new GoogleAuthProvider();