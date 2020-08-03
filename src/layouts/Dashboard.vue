<template>
  <q-layout view="lHh Lpr lff">

    <Header :togglePanel="true"/>

    <Panel :shown="panelShown" @changePanelState="panelShown != panelShown"/>

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
  }
}
</script>
