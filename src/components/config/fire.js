import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import { getFirestore } from "@firebase/firestore";
import { getDatabase } from "@firebase/database";
// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyD8CCWVlf3nhWruBluGjMP5lp6WIlVqPgs",
  authDomain: "gas-cylinder-87bc1.firebaseapp.com",
  databaseURL:
    "https://gas-cylinder-87bc1-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "gas-cylinder-87bc1",
  storageBucket: "gas-cylinder-87bc1.appspot.com",
  messagingSenderId: "613390215087",
  appId: "1:613390215087:web:a4abb7a046afd4b59ff15a",
  measurementId: "G-CCYWEB7P5V",
};

const app = firebase.initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const database = getDatabase(app);

export default firebase;
