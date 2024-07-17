// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD3xb-ZnB_VjjfJpGopBtebMaLoSEKn86I",
  authDomain: "gigalegoconstruction-e91fd.firebaseapp.com",
  projectId: "gigalegoconstruction-e91fd",
  storageBucket: "gigalegoconstruction-e91fd.appspot.com",
  messagingSenderId: "861940697783",
  appId: "1:861940697783:web:e3d2f3be596e914db59b32"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const dbf = getFirestore(app);

export { auth, provider, signInWithPopup ,dbf};
