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
import Header from 'components/Header'
import Panel from 'components/Panel'

export default {
  components: {
    Header,
    Panel
  },
  data () {
    return {
      panelShown: false
    }
  }
}
</script>
