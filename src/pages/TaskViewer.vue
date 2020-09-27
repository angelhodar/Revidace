<template>
  <q-page class="q-pa-md">
    <TaskCharts />
  </q-page>
</template>

<script>
export default {
  components: {
    TaskCharts: () => import("../components/Tasks/TaskCharts")
  }
}
</script>
