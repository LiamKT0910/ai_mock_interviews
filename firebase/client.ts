import { initializeApp, getApp, getApps } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: 'prepwise-c2797.firebaseapp.com',
    projectId: 'prepwise-c2797',
    storageBucket: 'prepwise-c2797.firebasestorage.app',
    messagingSenderId: '1032527433440',
    appId: '1:1032527433440:web:a2ffcbfad44b352639ca85',
    measurementId: 'G-67FYJ47X2Q',
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
