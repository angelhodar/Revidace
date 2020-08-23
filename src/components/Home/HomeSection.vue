<template>
  <div class="column items-center">
    <q-icon class="q-pt-xl" :name="icon" size="xl" />
    <div class="text-h3 text-weight-light q-pt-md">{{ title }}</div>
    <div class="text-weight-light text-h6 text-center q-pt-md">{{ description }}</div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    description: String,
    icon: String
  }
}
</script>
