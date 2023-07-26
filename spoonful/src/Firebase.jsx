import { initializeApp } from 'firebase/app'; // Updated import
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Initialize Firebase
const firebaseConfig = {
    apiKey: import.meta.env.VITE_API_KEY,
    authDomain: import.meta.env.VITE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_APP_ID,
  };
// Initialize Firebase

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig); // Initialize Firebase app

// Create references to Firebase Auth and Firestore
const auth = getAuth(firebaseApp); // Use getAuth from firebase/app
const firestore = getFirestore(firebaseApp); // Use getFirestore from firebase/app

export { auth, firestore };