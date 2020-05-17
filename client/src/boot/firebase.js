// Firebase core
import * as firebase from "firebase/app";
// Firebase services to use
import "firebase/auth"

// Credentials
import creds from 'config/firebase-creds'

let firebaseApp = firebase.initializeApp(creds)
let firebaseAuth = firebaseApp.auth()

// https://firebase.google.com/docs/reference/js/firebase.auth.Auth
export {firebaseAuth}
