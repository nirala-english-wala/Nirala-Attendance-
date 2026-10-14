import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBN6ex-UPF83FdQBi3sg--wzwXi91OnVn0",
  authDomain: "nirala-attendance.firebaseapp.com",
  projectId: "nirala-attendance",
  storageBucket: "nirala-attendance.firebasestorage.app",
  messagingSenderId: "414075981234",
  appId: "1:414075981234:web:54c749f71503dcb709e8ab"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
