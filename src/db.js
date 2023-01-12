import { getFirestore } from "firebase/firestore/lite";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBtBfiF_z665Sg5CIcEbhJnaoRW7Lvd3qM",
  authDomain: "pruebabd-d0e67.firebaseapp.com",
  projectId: "pruebabd-d0e67",
  storageBucket: "pruebabd-d0e67.appspot.com",
  messagingSenderId: "679524808900",
  appId: "1:679524808900:web:f69d113cfff0b25aa5b191",
  measurementId: "G-LN7PC2PWMG"
};


const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);

export default db;