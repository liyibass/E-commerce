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
// 輸入一個userAuth
// 除了將其轉換成userRef回傳之外
// 將他轉成snapshot 用來判斷是否需要新增使用者資料到資料庫中
export const createUserProfileDocument = async (userAuth, additionalData) => {
  //  如果沒有登入的使用者 return
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  // 從snapShot查看 如果在database中找不到該使用者的資料 就創一個
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      // firebase's create method

      let newUserData = {
        displayName,
        email,
        createdAt,
        ...additionalData,
      };
      // console.log(newUserData);

      await userRef.set(newUserData);
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
