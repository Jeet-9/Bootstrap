import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { collection, addDoc, updateDoc, deleteDoc, doc, getDocs } from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyCehIxkUBG03lRdPaSrC4QcrCaDCYKHNo4",
  authDomain: "finalproject-d5112.firebaseapp.com",
  projectId: "finalproject-d5112",
  storageBucket: "finalproject-d5112.appspot.com",
  messagingSenderId: "874423204559",
  appId: "1:874423204559:web:b9243ac149301c3b5f95ba"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app)

export {auth,db,createUserWithEmailAndPassword,signInWithEmailAndPassword,collection,addDoc,updateDoc,deleteDoc,doc,getDocs,};