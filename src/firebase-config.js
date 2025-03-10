// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCWaU24TdZQX5oy6rbyip4Z5eVHMgk7Pqw",
  authDomain: "react-firebase-f142c.firebaseapp.com",
  projectId: "react-firebase-f142c",
  storageBucket: "react-firebase-f142c.firebasestorage.app",
  messagingSenderId: "97539434436",
  appId: "1:97539434436:web:305ec35f6a961cfcb4e691",
  measurementId: "G-S0EXPHYJTQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);