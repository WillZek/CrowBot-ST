
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyB_4V1xS-2uxKC8bee81VYGLQDpqk6dG74",
  authDomain: "db-clanes.firebaseapp.com",
  projectId: "db-clanes",
  storageBucket: "db-clanes.firebasestorage.app",
  messagingSenderId: "33005133120",
  appId: "1:33005133120:web:d341d10c114ab4f077eea5",
  measurementId: "G-VGW9W6T841"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };