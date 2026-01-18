// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyABHjO58AQ20m3RhMrR2dqcxZty6R7hBKM",
  authDomain: "the-scene-89.firebaseapp.com",
  projectId: "the-scene-89",
  storageBucket: "the-scene-89.firebasestorage.app",
  messagingSenderId: "24363473234",
  appId: "1:24363473234:web:27ea6b58f379dfce61828b"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
