import * as firebase from "firebase/app"
import "firebase/auth"
import * as decode from "jwt-decode"

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
 * @param  {Object} store - Vuex Store
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

/**
 * Async function providing the application time to
 * wait for firebase to initialize and determine if a
 * user is authenticated or not with only a single observable
 * @param  {Object} store - Vuex Store
 */
export const ensureAuthIsInitialized = async store => {
  if (isAuthenticated(store)) return true
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

/** Handle the auth state of the user and
 * set it in the auth store module
 * @param  {Object} store - Vuex Store
 * @param  {Object} router - Vue Router
 * @param  {Object} currentUser - Firebase currentUser
 */
export const handleOnAuthStateChanged = async (store, router, currentUser) => {
  // Check from the store if the user was authenticated
  const authenticated = isAuthenticated(store)

  let user = null

  // If the user has logged in then extract its data
  if (currentUser) {
    // Get the token of the user and decode it to extract the role
    const token = await currentUser.getIdToken()
    const { role } = decode(token)
    user = {
      uid: currentUser.uid,
      email: currentUser.email,
      displayName: currentUser.displayName,
      role: role,
      phoneNumber: currentUser.phoneNumber,
      photoURL: currentUser.photoURL,
      creationTime: currentUser.metadata.creationTime,
      lastSignInTime: currentUser.metadata.lastSignInTime
    }
  }

  store.commit("auth/setCurrentUser", user)

  // If the user was authenticated then redirect to login page
  if (!currentUser && authenticated) router.push({ path: "/login" })
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
      console.log(err)
    }
  })
}
