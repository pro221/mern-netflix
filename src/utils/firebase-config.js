
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyBnjOrFlH5RHuBIMvqNejDRmxhZu-rFgKE",
  authDomain: "react-flixit.firebaseapp.com",
  projectId: "react-flixit",
  storageBucket: "react-flixit.appspot.com",
  messagingSenderId: "839897061025",
  appId: "1:839897061025:web:03b13e961755edc270c2e0",
  measurementId: "G-KT4R2CMG0C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);