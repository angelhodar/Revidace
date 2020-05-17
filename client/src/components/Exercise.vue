<template>
  <div class="col-auto">
  <q-card class="exercise-card" bordered>
      <q-img :src="require('assets/exercises/'+ thumbnail)"/>

      <q-card-section>
        <div class="text-overline text-orange-9">{{ category }}</div>
        <div class="text-h5 q-mt-sm q-mb-xs">{{ name }}</div>
        <div>{{ description }}</div>
      </q-card-section>

      <q-card-section v-if="false">
        <q-markup-table>
          <thead>
            <tr>
              <th class="text-left">Parámetro</th>
              <th class="text-left">Descripción</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(parameter, key) in parameters" :key="key">
              <td class="text-left">{{parameter.name}}</td>
              <td class="text-left">{{parameter.description}}</td>
            </tr>
          </tbody>
        </q-markup-table>
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    category: String,
    description: String,
    thumbnail: String,
    parameters: Object,
    profiles: Object
  }
}
</script>

<style lang="sass" scoped>
.exercise-card
  width: 100%
  max-width: 350px
</style>
