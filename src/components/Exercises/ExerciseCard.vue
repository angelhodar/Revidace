<template>
  <div class="q-pa-md col-md-4 col-lg-3 col-xs-12">
    <q-card class="exercise-card" @click="showExerciseDetails">
      <q-img src="https://picsum.photos/400/250">
        <div class="absolute-bottom text-subtitle2 text-center">{{ exercise.name }}</div>
      </q-img>
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
      this.$emit("showDetails", this.exercise)
    }
  }
}
</script>
