// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCS0VGt0sY13HxTLhQv7cvY6iE9LXw8BR4",
  authDomain: "netflixgpt-a0f98.firebaseapp.com",
  projectId: "netflixgpt-a0f98",
  storageBucket: "netflixgpt-a0f98.firebasestorage.app",
  messagingSenderId: "198544187233",
  appId: "1:198544187233:web:c8d8cd2820f64f4c6c2f20",
  measurementId: "G-5Z6PYDT2QJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
