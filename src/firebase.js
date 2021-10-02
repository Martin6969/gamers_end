import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBpbXZXmOCZv5UYrNggHIfq9DUUhJZSX54",
  authDomain: "gamersend-5ba19.firebaseapp.com",
  projectId: "gamersend-5ba19",
  storageBucket: "gamersend-5ba19.appspot.com",
  messagingSenderId: "98639953323",
  appId: "1:98639953323:web:2e067b12e14afe051a66ee"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 export {firebase};
