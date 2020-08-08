import { firebaseAuth } from "boot/firebase"
import Vue from "vue"

const state = {
  userDetails: {},
  token: null
}

const mutations = {
  SET_USER_DETAILS (state, user) {
    state.userDetails = user
  },
  SET_AUTH_TOKEN (state, token) {
    state.token = token
  },
  LOGOUT (state) {
    state.token = null
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
  handleAuthStateChanged ({ commit, dispatch, state }) {
    firebaseAuth.onAuthStateChanged(user => {
      if (user) {
        const userDetails = {
          email: user.email,
          uid: user.uid,
          displayName: user.displayName
        }
        commit("SET_USER_DETAILS", userDetails)
        user.getIdToken().then(token => {
          commit("SET_AUTH_TOKEN", token)
          Vue.prototype.$http.defaults.headers.common.Authorization = `Bearer ${token}`
          this.$router.push("/dashboard")
        })
      } else {
        if (state.token) dispatch("logout")
      }
    })
  },
  logout ({ commit }) {
    firebaseAuth
      .signOut()
      .then(res => {
        commit("LOGOUT")
        delete Vue.prototype.$http.defaults.headers.common.Authorization
        this.$router.push("/login")
      })
      .catch(err => {
        console.log(err)
      })
  }
}

const getters = {
  isAuthenticated: state => state.token != null
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
