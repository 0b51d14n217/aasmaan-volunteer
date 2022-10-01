import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCJ244oVoJjhKp-MdFwBnSNcTRZPoZAYf8",
  authDomain: "aasmaan-prototype.firebaseapp.com",
  projectId: "aasmaan-prototype",
  storageBucket: "aasmaan-prototype.appspot.com",
  messagingSenderId: "199809768586",
  appId: "1:199809768586:web:c82967fb58a294f9496173",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
