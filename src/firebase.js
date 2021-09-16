import firebase from "firebase/app"
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAx0V9P4y2a327QX5a-IHyliC2zJfEcfsM",
    authDomain: "githubpage-4ebaf.firebaseapp.com",
    databaseURL: "https://githubpage-4ebaf-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "githubpage-4ebaf",
    storageBucket: "githubpage-4ebaf.appspot.com",
    messagingSenderId: "299075645558",
    appId: "1:299075645558:web:988c8f6ea1081d72b16f57"
};

const app = firebase.initializeApp(firebaseConfig);
const database = firebase.firestore();

export default {
    database
}
