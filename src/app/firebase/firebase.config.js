// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBdhpXjc2I2uYY6dRSywoPkbezZs-qO8sI",
  authDomain: "gadgethub-apps.firebaseapp.com",
  projectId: "gadgethub-apps",
  storageBucket: "gadgethub-apps.firebasestorage.app",
  messagingSenderId: "38559482288",
  appId: "1:38559482288:web:186bfa64e859d6f3be5675",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
