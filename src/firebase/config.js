import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firebase';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyCv7Wfpw79ZVOCI1VUv_62dIZ-jiHAmiH8",
    authDomain: "fir-d8a5b.firebaseapp.com",
    projectId: "fir-d8a5b",
    storageBucket: "fir-d8a5b.appspot.com",
    messagingSenderId: "1018708312709",
    appId: "1:1018708312709:web:ed81821a7360605a801fec",
    measurementId: "G-L74WL8ZY46"
  };

  export default firebase.initializeApp(firebaseConfig)