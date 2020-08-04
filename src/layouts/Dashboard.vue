<template>
  <q-layout view="lHh Lpr lff">

    <Header :showMenuButton="true" :toggleMenu="togglePanel"/>

    <Panel :shown="panelShown"/>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
export default {
  components: {
    Header: () => import('components/Header'),
    Panel: () => import('components/Panel')
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
  }
}
</script>
