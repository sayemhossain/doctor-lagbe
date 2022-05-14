import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA9Xu2mspE9LD8qO4jYrDa3c3iD4Dz_Cg0",
  authDomain: "doctor-portal-5c43b.firebaseapp.com",
  projectId: "doctor-portal-5c43b",
  storageBucket: "doctor-portal-5c43b.appspot.com",
  messagingSenderId: "618227178093",
  appId: "1:618227178093:web:3cb103f32bd68822c13d64",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
