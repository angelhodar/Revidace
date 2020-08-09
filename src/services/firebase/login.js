import * as firebase from "firebase/app"
import "firebase/auth"

/**
 * @param {String} email - A Valid email
 * @param {String} password - Password
 *
 * @return {Promise} UserCredentials
 */
export const loginWithEmail = (email, password) => {
  return firebase.auth().signInWithEmailAndPassword(email, password)
}
