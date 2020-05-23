import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCEyC34L2oS6L7W1ftfQc16U2G9kOeMB84",
  authDomain: "e-commerce-db-b4465.firebaseapp.com",
  databaseURL: "https://e-commerce-db-b4465.firebaseio.com",
  projectId: "e-commerce-db-b4465",
  storageBucket: "e-commerce-db-b4465.appspot.com",
  messagingSenderId: "964557729585",
  appId: "1:964557729585:web:e3ad765735b4bda68b8a10",
  measurementId: "G-2VBD9TF774",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
