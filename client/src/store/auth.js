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
    firebaseAuth.signInWithEmailAndPassword(payload.email, payload.password)
      .then(res => {
        console.log(res)
        console.log(firebaseAuth.currentUser)
      })
      .catch(function(error) {
        console.log(error.code);
        console.log(error.message);
      });
  },
  register({ commit }, payload) {
    firebaseAuth.createUserWithEmailAndPassword(payload.email, payload.password)
      .then(res => {
        // API call to add the user to DB
        console.log(res);
      })
      .catch(function(error) {
        console.log(error.code);
        console.log(error.message);
      });
  },
  handleAuthStateChanged({ commit }, payload){
    firebaseAuth.onAuthStateChanged(user => {
      if (user) {
        // User is signed in.
        console.log('User signed in')
        console.log(user)
        user.getIdToken().then(token => {
          console.log(token)
        })
        // ...
      } else {
        // User is signed out.
        console.log('User signed out')
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



