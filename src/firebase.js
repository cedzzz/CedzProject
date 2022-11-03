// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore, collection} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBJyiO3kcTvFE99Ltn4E1pNj0I-LRQqEOk",
  authDomain: "cedricanimetracker.firebaseapp.com",
  databaseURL: "https://cedricanimetracker-default-rtdb.firebaseio.com",
  projectId: "cedricanimetracker",
  storageBucket: "cedricanimetracker.appspot.com",
  messagingSenderId: "325809265104",
  appId: "1:325809265104:web:e15d93c05fef3b8c1b01d5",
  measurementId: "G-CSLENWJKWB"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export {
    db
}
const analytics = getAnalytics(app);