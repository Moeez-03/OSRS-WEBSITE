// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAELshOgCBVItfRJ7I2unwjcdtPOyWIW1E",
  authDomain: "osrs-game.firebaseapp.com",
  projectId: "osrs-game",
  storageBucket: "osrs-game.firebasestorage.app",
  messagingSenderId: "888554849770",
  appId: "1:888554849770:web:a081c67cff9f4a0afc9e93",
  measurementId: "G-D9QCBBGLDK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;