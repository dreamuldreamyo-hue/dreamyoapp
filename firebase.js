// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBo1Ezg6tzCDDCGpBNWmJfCLe8hUsmLYi4",
  authDomain: "dreamyo-e42bb.firebaseapp.com",
  projectId: "dreamyo-e42bb",
  storageBucket: "dreamyo-e42bb.firebasestorage.app",
  messagingSenderId: "266927967076",
  appId: "1:266927967076:web:e5aca8599bc776b0774871",
  measurementId: "G-F6MPL89R9D"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
