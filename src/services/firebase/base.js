import * as firebase from "firebase/app"
import "firebase/auth"
import * as decode from "jwt-decode"
import { Notify } from "quasar"

/**
 * Firebase's auth interface method
 * https: //firebase.google.com/docs/reference/js/firebase.auth.html#callable
 * @return {Object} currentUser object from firebase
 */
export const auth = () => {
  return firebase.auth()
}

/** Convenience method to initialize firebase app
 * @param  {Object} Firebase Config
 * @return {Object} App
 */
export const init = config => {
  return firebase.initializeApp(config)
}

/**
 * Async function providing the application time to
 * wait for firebase to initialize and determine if a
 * user is authenticated or not with only a single observable
 */
export const ensureAuthIsInitialized = async store => {
  if (store.state.auth.isReady) return true
  // Create the observer only once on init
  return new Promise((resolve, reject) => {
    // Use a promise to make sure that the router will eventually show the route after the auth is initialized.
    const unsubscribe = firebase.auth().onAuthStateChanged(
      user => {
        resolve()
        unsubscribe()
      },
      () => {
        reject(new Error("Error with firebase. Please try again later"))
      }
    )
  })
}

/**
 * @param  {Object} store - Vuex store
 */
export const isAuthenticated = store => {
  return store.getters["auth/isAuthenticated"]
}

/**
 * Remove firebase auth token
 */
export const logoutUser = () => {
  return auth().signOut()
}

/** Handle the auth state of the user and
 * set it in the auth store module
 * @param  {Object} store - Vuex Store
 * @param  {Object} router - Vue Router
 * @param  {Object} currentUser - Firebase currentUser
 */
export const handleOnAuthStateChanged = async (store, router, currentUser) => {
  const initialAuthState = isAuthenticated(store)

  if (currentUser) {
    currentUser.getIdToken().then(token => {
      const { role } = decode(token)
      const userDetails = {
        uid: currentUser.uid,
        email: currentUser.email,
        displayName: currentUser.displayName,
        role: role,
        phoneNumber: currentUser.phoneNumber,
        photoURL: currentUser.photoURL,
        creationTime: currentUser.metadata.creationTime,
        lastSignInTime: currentUser.metadata.lastSignInTime
      }
      // Save to the store
      store.commit("auth/setAuthState", {
        userDetails: userDetails,
        userToken: token,
        isReady: true
      })
    })
  } else {
    // Save to the store
    store.commit("auth/setAuthState", {
      userDetails: null,
      userToken: null,
      isReady: true
    })
  }

  // If the user loses authentication route
  // them to the login page
  if (!currentUser && initialAuthState) router.push({ path: "/login" })
}

/**
 * @param  {Object} router - Vue Router
 * @param  {Object} store - Vuex Store
 */
export const setRoutesAuthGuard = async (router, store) => {
  router.beforeEach(async (to, from, next) => {
    try {
      // Force the app to wait until Firebase has
      // finished its initialization, and handle the
      // authentication state of the user properly
      await ensureAuthIsInitialized(store)
      // Check if the destination route required authentication
      if (to.matched.some(record => record.meta.requiresAuth)) {
        if (isAuthenticated(store)) {
          next()
        } else {
          next("/login")
        }
      } else if (to.path === "/login" && isAuthenticated(store)) {
        next("/dashboard")
      } else {
        next()
      }
    } catch (err) {
      Notify.create({
        message: `${err}`,
        color: "negative"
      })
    }
  })
}
