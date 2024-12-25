
import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDDC7miuZ_ED6S28qkIo9LV6g4Sj6fJjig",
  authDomain: "eibm-auth.firebaseapp.com",
  projectId: "eibm-auth",
  storageBucket: "eibm-auth.appspot.com",
  messagingSenderId: "710459144256",
  appId: "1:710459144256:web:6b972ad52e71ff88c907a5",
  measurementId: "G-KRKLSL3TTC"
};

// Initialize Firebase
export  const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const GoogleauthProvider = new GoogleAuthProvider()