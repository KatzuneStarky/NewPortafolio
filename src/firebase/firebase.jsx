// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB_LoD-v1GcgaDpTcvYORzzf37QrG7_IMU",
    authDomain: "myportafolio-b29d4.firebaseapp.com",
    projectId: "myportafolio-b29d4",
    storageBucket: "myportafolio-b29d4.appspot.com",
    messagingSenderId: "66184834408",
    appId: "1:66184834408:web:579060c69c37d326d1badd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)
export const db = getFirestore(app)