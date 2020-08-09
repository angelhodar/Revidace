import firebaseService from "../services/firebase"

export default ({ router, store, Vue }) => {
  const config = {
    apiKey: "AIzaSyColo5HkXorTmN1nC-xUAkBMhvBgV1vnu4",
    authDomain: "agrelink-6189c.firebaseapp.com",
    databaseURL: "https://agrelink-6189c.firebaseio.com",
    projectId: "agrelink-6189c",
    storageBucket: "agrelink-6189c.appspot.com",
    messagingSenderId: "284002383099",
    appId: "1:284002383099:web:208237c45a7bed4ee76c5e"
  }

  firebaseService.init(config)

  // Tell the application what to do when the
  // authentication state has changed
  // https://firebase.google.com/docs/reference/js/firebase.auth.Auth
  firebaseService.auth().onAuthStateChanged(
    user => {
      firebaseService.handleOnAuthStateChanged(store, router, user)
    },
    error => {
      console.error(error)
    }
  )

  // Setup the router to be intercepted on each route.
  // This allows the application to halt rendering until
  // Firebase is finished with its initialization process,
  // and handle the user accordingly
  firebaseService.setRoutesAuthGuard(router, store)

  Vue.prototype.$firebase = firebaseService
  store.$firebase = firebaseService
}
