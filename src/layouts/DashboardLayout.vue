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
import { mapState, mapActions } from "vuex"

export default {
  components: {
    Header: () => import("components/Dashboard/Header"),
    Panel: () => import("components/Dashboard/Panel")
  },
  data () {
    return {
      panelShown: false
    }
  },
  mounted () {
    this.$socket.client.open()
    this.identifyUser(this.user.id)
  },
  methods: {
    ...mapActions("users", ["identifyUser"]),
    togglePanel () {
      this.panelShown = !this.panelShown
    }
  },
  computed: {
    ...mapState("users", ["user"])
  }
}
</script>
