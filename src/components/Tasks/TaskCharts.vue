<template>
  <TestChart :taskData="task.data" />
</template>

<script>
export default {
  components: {
    TestChart: () => import("../Charts/TestChart")
  },
  props: {
    task: Object
  },
  mounted () {
    console.log(`Task ${this.task.id}`)
  }
}
</script>
