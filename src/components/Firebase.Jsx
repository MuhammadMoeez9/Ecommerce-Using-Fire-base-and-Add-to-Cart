// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCd6CuDCxTx8rvx1Ox5b9RcDu2jZ6TBbck",
  authDomain: "ecommerce-addtocart-a1a86.firebaseapp.com",
  projectId: "ecommerce-addtocart-a1a86",
  storageBucket: "ecommerce-addtocart-a1a86.appspot.com",
  messagingSenderId: "791523893691",
  appId: "1:791523893691:web:ad474738492fe931dbe49e",
  measurementId: "G-J64ZP6H67H",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
