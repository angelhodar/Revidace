<template>
  <div class="q-pb-md q-gutter-sm">
      <q-breadcrumbs>
        <template v-slot:separator>
          <q-icon name="arrow_forward" color="primary" />
        </template>
        <q-breadcrumbs-el label="Dashboard" icon="home" to="/dashboard" />
        <q-breadcrumbs-el :label="label" :icon="icon" />
      </q-breadcrumbs>
    </div>
</template>

<script>
export default {
  name: "BreadCrumbs",
  props: {
    label: String,
    icon: String
  }
}
</script>
