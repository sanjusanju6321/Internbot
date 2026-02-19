// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-app.js";
import { 
  getAuth, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  sendPasswordResetEmail,
  updateProfile,
  GoogleAuthProvider, 
  signInWithPopup 
} from "https://www.gstatic.com/firebasejs/10.14.0/firebase-auth.js";

// 🔥 Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyDBjoLYrityllTsILjcAAILikKX1_D-XN0",
  authDomain: "bot-ai-8b01d.firebaseapp.com",
  projectId: "bot-ai-8b01d",
  storageBucket: "bot-ai-8b01d.firebasestorage.app",
  messagingSenderId: "393192829695",
  appId: "1:393192829695:web:4483a6134a2a9d1a81d2ca",
  measurementId: "G-NS9X93KJ57"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
