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
    Header: () => import("components/Structure/Header"),
    Panel: () => import("components/Structure/Panel")
  },
  data () {
    return {
      panelShown: false
    }
  },
  mounted () {
    this.$socket.client.open()
    this.sendUserData({
      uid: this.user.uid,
      email: this.user.email
    })
  },
  methods: {
    ...mapActions("sockets", ["sendUserData"]),
    togglePanel () {
      this.panelShown = !this.panelShown
    }
  },
  computed: {
    ...mapState("auth", ["user"])
  }
}
</script>
