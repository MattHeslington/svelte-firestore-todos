import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyAchhKqHiPBD2uJDKX-vBg36nCJeKbXa2I",
    authDomain: "svelte-realtime-todos-735b2.firebaseapp.com",
    databaseURL: "https://svelte-realtime-todos-735b2.firebaseio.com",
    projectId: "svelte-realtime-todos-735b2",
    storageBucket: "svelte-realtime-todos-735b2.appspot.com",
    messagingSenderId: "46589013255",
    appId: "1:46589013255:web:5ed28c4deccb23fb28e9a2"
};

console.log(firebase)

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();

export const db = firebase.firestore();