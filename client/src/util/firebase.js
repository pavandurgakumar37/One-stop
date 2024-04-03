// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAMDhXC8x-x-B8J2x9PagAo9SWdF0yP7FE",
  authDomain: "one-stop3746.firebaseapp.com",
  projectId: "one-stop3746",
  storageBucket: "one-stop3746.appspot.com",
  messagingSenderId: "35436854258",
  appId: "1:35436854258:web:c002e08ac0b8ca0ce4496b",
  measurementId: "G-Q37H01M117"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);