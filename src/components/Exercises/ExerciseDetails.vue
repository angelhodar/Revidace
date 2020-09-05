<template>
  <q-dialog ref="dialog" @hide="onDialogHide">
    <q-card>
      <q-card-section>
        <q-carousel animated v-model="slide" arrows navigation infinite>
          <q-carousel-slide :name="1" img-src="https://cdn.quasar.dev/img/mountains.jpg" />
          <q-carousel-slide :name="2" img-src="https://cdn.quasar.dev/img/parallax1.jpg" />
          <q-carousel-slide :name="3" img-src="https://cdn.quasar.dev/img/parallax2.jpg" />
          <q-carousel-slide :name="4" img-src="https://cdn.quasar.dev/img/quasar.jpg" />

          <template v-if="$q.screen.lt.md" v-slot:control>
            <q-carousel-control position="top-right">
              <q-btn outline round color="white" icon="clear" size="md" @click="hide"/>
            </q-carousel-control>
          </template>
        </q-carousel>
      </q-card-section>

      <q-card-section>
        <div class="q-gutter-y-md">
          <div class="text-h5 text-center">{{ exercise.name }}</div>
          <div class="text-weight-light">{{ exercise.description }}</div>
          <ExerciseProfiles :exerciseProp="exercise"/>
        </div>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script>
export default {
  props: {
    exercise: Object
  },
  components: {
    ExerciseProfiles: () => import("./ExerciseProfiles")
  },
  data () {
    return {
      slide: 1
    }
  },
  methods: {
    show () {
      this.$refs.dialog.show()
    },
    hide () {
      this.$refs.dialog.hide()
    },
    onDialogHide () {
      this.$emit("hide")
    },
    onOk () {
      this.hide()
    }
  }
}
</script>
