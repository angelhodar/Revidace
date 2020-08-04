<template>
  <q-page class="flex flex-center">
    <img
      alt="Quasar logo"
      src="~assets/quasar-logo-full.svg"
    >
  </q-page>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'PageIndex',
  mounted () {
    this.handleAuthStateChanged()
  },
  methods: {
    ...mapActions('auth', ['handleAuthStateChanged'])
  }
}
</script>
