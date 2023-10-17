import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDmYroGKGDa-hhsSYQvZvFwS_Xs7vgDOkk",
    authDomain: "bytesync-1.firebaseapp.com",
    projectId: "bytesync-1",
    storageBucket: "bytesync-1.appspot.com",
    messagingSenderId: "624022487521",
    appId: "1:624022487521:web:2bd11b1223c2bb55f7d2a0"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);