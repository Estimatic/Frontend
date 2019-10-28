import firebase from "firebase/app";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD91RxF5ohDshtPVktFgiICPkAp_79KGw0",
  authDomain: "estimatic-d8b9c.firebaseapp.com",
  databaseURL: "https://estimatic-d8b9c.firebaseio.com",
  projectId: "estimatic-d8b9c",
  storageBucket: "estimatic-d8b9c.appspot.com",
  messagingSenderId: "947802338382",
  appId: "1:947802338382:web:343b4608890646926cff1f",
  measurementId: "G-XEXQJBGHX5"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const storage = firebase.storage();

export default firebase;
