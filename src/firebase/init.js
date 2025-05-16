// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBi_x9LHQFDnqK4SraK-zZkao9QqqeZm28",
  authDomain: "fir-mini-project-4c5b0.firebaseapp.com",
  projectId: "fir-mini-project-4c5b0",
  storageBucket: "fir-mini-project-4c5b0.firebasestorage.app",
  messagingSenderId: "498286853259",
  appId: "1:498286853259:web:3d2d5cdc0dc7365607a88e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();