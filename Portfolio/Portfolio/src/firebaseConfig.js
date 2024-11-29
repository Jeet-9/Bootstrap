// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// import { firebaseConfig } from "../src/firebaseConfig"

const firebaseConfig = {
  apiKey: "AIzaSyCKifjb-OlTRvKQ7IO0FI1C9jeoQb9u0HQ",
  authDomain: "portfolio-715b4.firebaseapp.com",
  projectId: "portfolio-715b4",
  storageBucket: "portfolio-715b4.firebasestorage.app",
  messagingSenderId: "69728072661",
  appId: "1:69728072661:web:da8dafd70ecd5a4868035c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };