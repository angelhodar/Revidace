import { firebaseAuth } from 'boot/firebase'

const state = {
  id: null,
  token: null,
  email: null
}

const mutations = {
  storeUser(state, data) {
    state.id = data.localId
    state.token = data.idToken
    state.email = data.email
  }
}

const actions = {
  login({ commit }, payload) {
    firebaseAuth.signInWithEmailAndPassword(payload.email, payload.password).catch(function(error) {
      console.log(error.code);
      console.log(error.message);
    });
  },
  register({ commit }, payload) {
    firebaseAuth.createUserWithEmailAndPassword(payload.email, payload.password).catch(function(error) {
      console.log(error.code);
      console.log(error.message);
    });
  },
  handleAuthStateChanged({ commit }, payload){
    firebaseAuth.onAuthStateChanged(function(user) {
      if (user) {
        // User is signed in.
        var email = user.email;
        var uid = user.uid;
        // ...
      } else {
        // User is signed out.
      }
    });
  }
}

const getters = {

}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}



