import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyByGBeXkidqHWK3H8xHiGVLEADf1dxLmWQ",
  authDomain: "auth-1e204.firebaseapp.com",
  projectId: "auth-1e204",
  storageBucket: "auth-1e204.appspot.com",
  messagingSenderId: "445704717530",
  appId: "1:445704717530:web:4ee275898db3f050d2d1e3"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider;

export {auth,provider} 