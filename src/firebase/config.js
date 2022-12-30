import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB8R9Wb1QnJuyzMR8YWpp32KjM-7MTRawk",
    authDomain: "olxproject-9f2a8.firebaseapp.com",
    projectId: "olxproject-9f2a8",
    storageBucket: "olxproject-9f2a8.appspot.com",
    messagingSenderId: "603736297816",
    appId: "1:603736297816:web:d361588c6a22d6cefdd52d",
    measurementId: "G-1T7Z7L2H7X"
  };



export default firebase.initializeApp(firebaseConfig)
