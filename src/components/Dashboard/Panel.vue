<template>
  <q-drawer :value="isShown" content-class="bg-grey-1">
    <q-scroll-area
      style="height: calc(100% - 150px); margin-top: 150px; border-right: 1px solid #ddd"
    >
      <q-list>
        <q-item-label header>Panel</q-item-label>
        <PanelSection v-for="link in userMenu" :key="link.title" v-bind="link" />
      </q-list>

      <q-list v-if="isAdmin">
        <q-item-label header>Administration</q-item-label>
        <PanelSection v-for="link in adminMenu" :key="link.title" v-bind="link" />
      </q-list>
    </q-scroll-area>
    <q-img class="absolute-top" src="https://cdn.quasar.dev/img/material.png" style="height: 150px">
      <div class="absolute-bottom bg-transparent">
        <q-avatar size="56px" class="q-mb-sm">
          <img src="profile.svg" />
        </q-avatar>
        <div class="text-weight-bold">Test</div>
        <div>test@gmail.com</div>
      </div>
    </q-img>
  </q-drawer>
</template>

<script>
export default {
  props: {
    shown: Boolean,
    role: String
  },
  components: {
    PanelSection: () => import("./PanelSection")
  },
  data () {
    return {
      userMenu: [
        {
          title: "Devices",
          icon: "contactless",
          route: "/dashboard/devices",
          separator: false
        },
        {
          title: "Exercises",
          icon: "create",
          route: "/dashboard/exercises",
          separator: false
        },
        {
          title: "Patients",
          icon: "people_alt",
          route: "/dashboard/patients",
          separator: false
        },
        {
          title: "Tasks",
          icon: "assignment",
          route: "/dashboard/tasks",
          separator: false
        }
      ],
      adminMenu: [
        {
          title: "Users",
          icon: "account_circle",
          route: "/dashboard/users",
          separator: false
        }
      ]
    }
  },
  computed: {
    isAdmin () {
      return this.role === "admin"
    },
    isShown () {
      return this.shown
    }
  }
}
</script>
