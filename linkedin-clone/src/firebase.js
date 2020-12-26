import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAIfXiwtvajMDhNkxkrXF83ykYcPcxHUDQ",
    authDomain: "linkedin-clone-a2457.firebaseapp.com",
    projectId: "linkedin-clone-a2457",
    storageBucket: "linkedin-clone-a2457.appspot.com",
    messagingSenderId: "983282365470",
    appId: "1:983282365470:web:6f15970d25116717b66a0f",
    measurementId: "G-WWMKJ4B9DX"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth;

export { db, auth };