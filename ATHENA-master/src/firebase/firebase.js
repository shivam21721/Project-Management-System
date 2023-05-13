import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCc4niFEQWcD9hHluWBAP54PJw4OmqSdIw",
  authDomain: "task-management-dc34a.firebaseapp.com",
  projectId: "task-management-dc34a",
  storageBucket: "task-management-dc34a.appspot.com",
  messagingSenderId: "1053375385099",
  appId: "1:1053375385099:web:1420fc6acd92a14cc6410e",
};

const app = firebase.initializeApp(firebaseConfig);
const provider = new firebase.auth.GoogleAuthProvider();
const fieldValue = firebase.firestore.FieldValue;
const auth = firebase.auth();

export { app, fieldValue, provider, auth };
