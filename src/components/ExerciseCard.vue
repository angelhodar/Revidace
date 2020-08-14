<template>
  <div class="q-pa-md col-3">
    <q-card class="exercise-card">
      <q-card-section>
        <div class="text-h6">{{ exercise.name }}</div>
      </q-card-section>

      <q-card-section>{{ exercise.description }}</q-card-section>

      <q-separator />

      <q-card-actions>
        <q-btn flat @click="showExerciseDetails">Show</q-btn>
      </q-card-actions>
    </q-card>
  </div>
</template>

<script>
export default {
  props: {
    exercise: Object
  },
  methods: {
    showExerciseDetails () {
      console.log("Showing details...")
    }
  }
}
</script>

<style>
</style>
