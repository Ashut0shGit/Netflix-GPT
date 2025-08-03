// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDzoVmFR1vkos9cP_ZKOatxQ3pMU25pwmw",
  authDomain: "flixifyai.firebaseapp.com",
  projectId: "flixifyai",
  storageBucket: "flixifyai.firebasestorage.app",
  messagingSenderId: "492379961534",
  appId: "1:492379961534:web:6d8a22a30a25f3d9c486ef",
  measurementId: "G-CWWXEJCCK9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
