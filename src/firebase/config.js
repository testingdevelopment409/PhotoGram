import firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyAXltt-RvWDRZ89VMXYpnepPBaZcZBowIo",
  authDomain: "photo-gallery-2e283.firebaseapp.com",
  projectId: "photo-gallery-2e283",
  storageBucket: "photo-gallery-2e283.appspot.com",
  messagingSenderId: "326963859134",
  appId: "1:326963859134:web:697c4e23b4659dfcc858ef",
  measurementId: "G-24HYTL5JCL",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timeStamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timeStamp };
