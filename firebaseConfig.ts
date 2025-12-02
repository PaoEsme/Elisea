// firebaseConfig.ts
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
//  Firebase
const firebaseConfig = {
  apiKey: "AIzaSyD9R9BQpaV9Xat3dGnFgRFT3LjGyYnVFFg",
  authDomain: "elisea-18f0c.firebaseapp.com",
  projectId: "elisea-18f0c",
  storageBucket: "elisea-18f0c.firebasestorage.app",
  messagingSenderId: "753252919480",
  appId: "1:753252919480:web:8d6d2c3a05a0600c236c4d",
};

// Evitar inicializar dos veces (muy común en Expo)
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export default app;