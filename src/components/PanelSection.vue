<template>
  <div>
    <q-item :to="route">
      <q-item-section v-if="icon" avatar>
        <q-icon :name="icon" />
      </q-item-section>

      <q-item-section>
        <q-item-label>{{ title }}</q-item-label>
      </q-item-section>
    </q-item>

    <q-separator v-if="separator"/>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    icon: String,
    route: String,
    separator: Boolean
  }
}
</script>
