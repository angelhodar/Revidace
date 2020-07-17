<template>
  <div id="q-app">
    <router-view />
  </div>
</template>

<script>
import {mapActions} from 'vuex'

export default {
  methods: {
    ...mapActions('auth', ['handleAuthStateChanged'])
  },
  mounted() {
    this.handleAuthStateChanged()
  }
}
</script>
