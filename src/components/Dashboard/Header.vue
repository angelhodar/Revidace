<template>
  <q-header elevated>
    <q-toolbar>
      <q-btn v-if="showMenuButton" flat dense icon="menu" @click="changePanelState"/>
      <q-toolbar-title class="text-center">Revidace</q-toolbar-title>
      <q-btn flat dense icon="exit_to_app" label="Logout" @click="logout"/>
    </q-toolbar>
  </q-header>
</template>

<script>
import { mapActions } from "vuex"

export default {
  props: {
    showMenuButton: Boolean
  },
  methods: {
    ...mapActions("users", ["logout"]),
    changePanelState () {
      this.$emit("toggleMenu")
    }
  }
}
</script>
