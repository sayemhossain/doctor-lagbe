import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAEYdWFTpmAGWgQDSm3kGB2LY3_ohjWJow",
  authDomain: "doctor-lagbe-199a4.firebaseapp.com",
  projectId: "doctor-lagbe-199a4",
  storageBucket: "doctor-lagbe-199a4.appspot.com",
  messagingSenderId: "689613647010",
  appId: "1:689613647010:web:b57317fda39275debcbbfb",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
