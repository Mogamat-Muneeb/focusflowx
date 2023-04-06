import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBH5XNhyMNbvfXmtF7c2_oLjTtJI8EM8LE",
    authDomain: "focusflowx.firebaseapp.com",
    projectId: "focusflowx",
    storageBucket: "focusflowx.appspot.com",
    messagingSenderId: "130506357244",
    appId: "1:130506357244:web:be6fd36c5fe8b229f91a79",
    measurementId: "G-R5H7VELLQD"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const storage = getStorage();
export const db = getFirestore();