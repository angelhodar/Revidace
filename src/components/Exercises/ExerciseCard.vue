<template>
  <div class="q-pa-md col-md-3 col-xs-12">
    <q-card class="exercise-card" @click="showExerciseDetails">
      <q-img src="https://picsum.photos/400/200" basic>
        <div class="absolute-bottom text-subtitle2 text-center">{{ exercise.name }}</div>
      </q-img>
    </q-card>
    <ExerciseDetails :shown="clicked" :exercise="exercise" />
  </div>
</template>

<script>
export default {
  props: {
    exercise: Object
  },
  components: {
    ExerciseDetails: () => import("./ExerciseDetails")
  },
  data () {
    return {
      clicked: false
    }
  },
  methods: {
    showExerciseDetails () {
      this.clicked = !this.clicked
    }
  }
}
</script>

<style>
</style>
