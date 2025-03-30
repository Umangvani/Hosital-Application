import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCNkC9ez-Gd_5aNMHt0OxhwMRRIFB-Dpr8",
    authDomain: "blue-hospital.firebaseapp.com",
    projectId: "blue-hospital",
    storageBucket: "blue-hospital.firebasestorage.app",
    messagingSenderId: "478691584205",
    appId: "1:478691584205:web:16a02289fd0d464bb4a184",
    measurementId: "G-TL6T7R7CNV"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, signInWithPopup };