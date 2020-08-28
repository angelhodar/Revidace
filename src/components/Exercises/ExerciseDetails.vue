<template>
  <q-dialog v-model="isShown">
    <q-card>
      <q-card-section>
        <q-carousel animated v-model="slide" arrows navigation infinite>
          <q-carousel-slide :name="1" img-src="https://cdn.quasar.dev/img/mountains.jpg" />
          <q-carousel-slide :name="2" img-src="https://cdn.quasar.dev/img/parallax1.jpg" />
          <q-carousel-slide :name="3" img-src="https://cdn.quasar.dev/img/parallax2.jpg" />
          <q-carousel-slide :name="4" img-src="https://cdn.quasar.dev/img/quasar.jpg" />
        </q-carousel>
      </q-card-section>

      <q-card-section>
        <div class="text-h6 text-center">{{ exercise.name }}</div>
      </q-card-section>

      <q-card-section class="q-pt-none">{{ exercise.description }}</q-card-section>

      <q-card-section>
        <ExerciseProfiles :exerciseProp="exercise"/>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script>
export default {
  name: "ExerciseDetails",
  props: {
    exercise: Object,
    shown: Boolean
  },
  components: {
    ExerciseProfiles: () => import("./ExerciseProfiles")
  },
  data () {
    return {
      isShown: false,
      slide: 1
    }
  },
  watch: {
    shown: function (val) {
      this.isShown = val
    }
  }
}
</script>
