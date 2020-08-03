<template>
  <q-drawer v-model="shown" content-class="bg-grey-1">

    <q-scroll-area style="height: calc(100% - 150px); margin-top: 150px; border-right: 1px solid #ddd">
      <q-list>
        <q-item-label header>Panel</q-item-label>
        <PanelSection
          v-for="link in menu"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-scroll-area>

    <q-img class="absolute-top" src="https://cdn.quasar.dev/img/material.png" style="height: 150px">
        <div class="absolute-bottom bg-transparent">
          <q-avatar size="56px" class="q-mb-sm">
            <img src="https://cdn.quasar.dev/img/boy-avatar.png">
          </q-avatar>
          <div class="text-weight-bold">Test</div>
          <div>test@gmail.com</div>
        </div>
      </q-img>

  </q-drawer>
</template>

<script>
import PanelSection from 'components/PanelSection'

export default {
  props: {
    shown: Boolean
  },
  components: {
    PanelSection
  },
  data () {
    return {
      menu: [
        {
          title: 'Perfil',
          icon: 'account_circle',
          route: 'https://quasar.dev',
          separator: false
        },
        {
          title: 'Configuración',
          icon: 'settings',
          route: 'https://quasar.dev',
          separator: true
        },
        {
          title: 'Dispositivos',
          icon: 'contactless',
          route: 'https://github.com/quasarframework',
          separator: false
        },
        {
          title: 'Ejercicios',
          icon: 'create',
          route: 'https://chat.quasar.dev',
          separator: false
        },
        {
          title: 'Pacientes',
          icon: 'people_alt',
          route: 'https://forum.quasar.dev',
          separator: false
        },
        {
          title: 'Resultados',
          icon: 'assignment',
          route: 'https://forum.quasar.dev',
          separator: true
        },
        {
          title: 'Salir',
          icon: 'exit_to_app',
          route: 'https://twitter.quasar.dev',
          separator: false
        }
      ]
    }
  }
}
</script>
