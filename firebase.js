// Import the functions from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products used
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
    apiKey: "AIzaSyBhi2t853PGqwoeyYSQm698YvpXFE46fEk",
    authDomain: "twitter-v2-194c7.firebaseapp.com",
    projectId: "twitter-v2-194c7",
    storageBucket: "twitter-v2-194c7.appspot.com",
    messagingSenderId: "805903885835",
    appId: "1:805903885835:web:2784c7731f530f9542490e"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };