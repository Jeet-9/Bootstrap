import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAo0FreeAnD5XcfpbaiUFV1gHSv8PqB5pY",
  authDomain: "reactbatch-d4ce7.firebaseapp.com",
  projectId: "reactbatch-d4ce7",
  storageBucket: "reactbatch-d4ce7.appspot.com",
  messagingSenderId: "743580311389",
  appId: "1:743580311389:web:f0de4d42e2e1ca05b552b4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app)

export {auth,db}