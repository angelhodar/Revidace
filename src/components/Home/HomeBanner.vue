<template>
  <div class="column items-center">
    <div class="text-h2 q-pt-md text-center">{{ title }}</div>
    <div class="text-h6 q-py-lg text-center">{{ subtitle }}</div>
    <q-btn outline color="primary" to="/login" size="lg">Login</q-btn>
  </div>
</template>

<script>
export default {
  name: "HomeBanner",
  props: {
    title: String,
    subtitle: String
  }
}
</script>
