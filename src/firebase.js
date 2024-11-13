// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA0xrp6DFHXI2nr_ulNLz0X1RIrGWyrY4g",
  authDomain: "react-firebase-d1b2f.firebaseapp.com",
  projectId: "react-firebase-d1b2f",
  storageBucket: "react-firebase-d1b2f.firebasestorage.app",
  messagingSenderId: "889332429915",
  appId: "1:889332429915:web:40003518aeded2ef057b7e",
  measurementId: "G-857S31TDQ8",
};

// Initialize Firebase
const googleAuthProvider = new GoogleAuthProvider();
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { db, googleAuthProvider, auth };
