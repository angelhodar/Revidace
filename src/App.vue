<template>
  <div id="q-app">
    <router-view />
  </div>
</template>

<script>
import { mapActions } from "vuex"

export default {
  name: "App",
  mounted () {
    this.handleAuthStateChanged()
  },
  methods: {
    ...mapActions("auth", ["handleAuthStateChanged"])
  }
}
</script>
