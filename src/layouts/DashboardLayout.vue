<template>
  <q-layout view="lHh Lpr lff">
    <Header :showMenuButton="true" :toggleMenu="togglePanel" />

    <Panel :shown="panelShown" :role="user.role" />

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { mapState } from "vuex"
export default {
  components: {
    Header: () => import("components/Header"),
    Panel: () => import("components/Panel")
  },
  data () {
    return {
      panelShown: false
    }
  },
  methods: {
    togglePanel () {
      this.panelShown = !this.panelShown
    }
  },
  computed: {
    ...mapState("auth", ["user"])
  }
}
</script>
