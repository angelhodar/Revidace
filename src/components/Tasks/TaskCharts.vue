<template>
  <RandomChart />
</template>

<script>
export default {
  components: {
    RandomChart: () => import("../Charts/RandomChart")
  }
}
</script>
