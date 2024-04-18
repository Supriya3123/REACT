// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
import "firebase/compat/auth";
import firebase from 'firebase/compat/app'
import'firebase/compat/database'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
 const firebaseConfig = {
  apiKey: "AIzaSyB4aWD6fqkN3TJekcBRyqvCAMkSNX6vrBI",
  authDomain: "react-project-3e8c7.firebaseapp.com",
  projectId: "react-project-3e8c7",
  storageBucket: "react-project-3e8c7.appspot.com",
  messagingSenderId: "823728996323",
  appId: "1:823728996323:web:770080adb9603435256ad6",
  measurementId: "G-DDPV217P3C"
};

// Initialize Firebase
const app =  firebase.initializeApp(firebaseConfig);
export default app