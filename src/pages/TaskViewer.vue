<template>
  <q-page class="q-pa-md">
    <BreadCrumbs :breadcrumbs="breadcrumbs" />
    <TaskCharts :task="getTaskById($route.params.id)" />
  </q-page>
</template>

<script>
import { mapGetters } from "vuex"

export default {
  components: {
    BreadCrumbs: () => import("../components/Dashboard/BreadCrumbs"),
    TaskCharts: () => import("../components/Tasks/TaskCharts")
  },
  data () {
    return {
      breadcrumbs: [
        {
          label: "Tasks",
          icon: "assignment",
          to: "/dashboard/tasks"
        },
        {
          label: this.$route.params.id
        }
      ]
    }
  },
  computed: {
    ...mapGetters("tasks", ["getTaskById"])
  }
}
</script>
