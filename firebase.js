// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA0YZjIYAf3_PvG8v4C0pdzqVwTnr5dHEA",
  authDomain: "sales-dashboard-3c77c.firebaseapp.com",
  projectId: "sales-dashboard-3c77c",
  storageBucket: "sales-dashboard-3c77c.firebasestorage.app",
  messagingSenderId: "993536349092",
  appId: "1:993536349092:web:f662c91c4de2c4ab2de731",
  measurementId: "G-CD3XNQMX3N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db = getFirestore(app);

export { db };