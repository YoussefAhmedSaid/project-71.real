import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyB9ADf7LQwIVZS0IZNXUUhgXhwr1YqctzI",
    authDomain: "project-71-ddf29.firebaseapp.com",
    projectId: "project-71-ddf29",
    storageBucket: "project-71-ddf29.appspot.com",
    messagingSenderId: "625945119779",
    appId: "1:625945119779:web:1d66dc12a171cd3e04f596"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
