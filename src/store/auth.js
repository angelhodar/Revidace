import { firebaseAuth } from "boot/firebase"

const state = {
  uid: null,
  token: null,
  email: null
}

const mutations = {
  storeUser (state, data) {
    state.uid = data.uid
    state.token = data.token
    state.email = data.email
  }
}

const actions = {
  login ({ commit }, payload) {
    firebaseAuth
      .signInWithEmailAndPassword(payload.email, payload.password)
      .then(res => {
        console.log("User logged in")
      })
      .catch(function (error) {
        console.log(error.code)
        console.log(error.message)
      })
  },
  register ({ commit }, payload) {
    firebaseAuth
      .createUserWithEmailAndPassword(payload.email, payload.password)
      .then(res => {
        console.log("User registered")
      })
      .catch(function (error) {
        console.log(error.code)
        console.log(error.message)
      })
  },
  handleAuthStateChanged ({ commit }, payload) {
    firebaseAuth.onAuthStateChanged(user => {
      if (user) {
        console.log("User signed in")
        user.getIdToken().then(token => {
          commit("storeUser", { uid: user.uid, token: token, email: user.email })
        })
      } else {
        console.log("User signed out")
      }
    })
  }
}

const getters = {}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
