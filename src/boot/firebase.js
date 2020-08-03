// Firebase core
import * as firebase from "firebase/app";
// Firebase services to use
import "firebase/auth";

let firebase_conf = {
  apiKey: "AIzaSyColo5HkXorTmN1nC-xUAkBMhvBgV1vnu4",
  authDomain: "agrelink-6189c.firebaseapp.com",
  databaseURL: "https://agrelink-6189c.firebaseio.com",
  projectId: "agrelink-6189c",
  storageBucket: "agrelink-6189c.appspot.com",
  messagingSenderId: "284002383099",
  appId: "1:284002383099:web:208237c45a7bed4ee76c5e"
};

let firebaseApp = firebase.initializeApp(firebase_conf);
let firebaseAuth = firebaseApp.auth();

Vue.prototype.$auth = firebaseAuth;

// https://firebase.google.com/docs/reference/js/firebase.auth.Auth
export { firebaseAuth };
