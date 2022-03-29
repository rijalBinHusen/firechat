import firebase from "firebase/app";
import "firebase/database";

const config = {
  apiKey: "AIzaSyCY3JFVENQhvYRRDJiVymK64AK5dhD5MQ8",

  authDomain: "catatansaya-b7f41.firebaseapp.com",

  databaseURL: "https://catatansaya-b7f41-default-rtdb.firebaseio.com",

  projectId: "catatansaya-b7f41",

  storageBucket: "catatansaya-b7f41.appspot.com",

  messagingSenderId: "602940561973",

  appId: "1:602940561973:web:8a56f6a18c3516dc98ef7c",
};

const db = firebase.initializeApp(config);
export default db;
