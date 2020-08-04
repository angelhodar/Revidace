<template>
  <q-header elevated>
    <q-toolbar>
      <q-btn v-if="showMenuButton" flat dense round icon="menu" @click="changePanelState()"/>
      <q-toolbar-title class="absolute-center">AgreLink</q-toolbar-title>
    </q-toolbar>
  </q-header>
</template>

<script>
export default {
  props: {
    showMenuButton: Boolean,
    toggleMenu: Function
  },
  methods: {
    changePanelState () {
      this.toggleMenu()
    }
  }
}
</script>
