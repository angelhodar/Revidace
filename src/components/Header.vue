<template>
  <q-header elevated>
    <q-toolbar>
      <q-btn v-if="showMenuButton" flat dense round icon="menu" @click="changePanelState"/>
      <q-toolbar-title class="text-center">AgreLink</q-toolbar-title>
      <q-btn flat dense round icon="exit_to_app" label="Logout" @click="logoutUser"/>
    </q-toolbar>
  </q-header>
</template>

<script>
import { mapActions } from "vuex"

export default {
  props: {
    showMenuButton: Boolean,
    toggleMenu: Function
  },
  methods: {
    ...mapActions("auth", ["logoutUser"]),
    changePanelState () {
      this.toggleMenu()
    }
  }
}
</script>
