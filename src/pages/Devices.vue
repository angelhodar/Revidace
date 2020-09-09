<template>
  <q-page class="q-pa-md">
    <BreadCrumbs label="Devices" icon="contactless" />
    <div class="row">
      <DeviceCard
        v-for="device in devices"
        :key="device.id"
        :device="device"
        @onSendExercise="deviceSelected"
      />
    </div>
  </q-page>
</template>

<script>
import { Exercises, Patients } from "../services"
import ExerciseLauncher from "components/ExerciseLauncher"
import { mapState, mapActions } from "vuex"

export default {
  components: {
    DeviceCard: () => import("components/DeviceCard"),
    BreadCrumbs: () => import("components/Dashboard/BreadCrumbs")
  },
  data () {
    return {
      exercises: [],
      patients: []
    }
  },
  async mounted () {
    await this.getDevices()
    const { data: patients } = await Patients.getPatients()
    const { data: exercises } = await Exercises.getExercises()
    this.patients = patients
    this.exercises = exercises
  },
  computed: {
    ...mapState("auth", ["user"]),
    ...mapState("devices", ["devices"])
  },
  methods: {
    ...mapActions("sockets", ["launchExercise"]),
    ...mapActions("devices", ["getDevices"]),
    deviceSelected (device) {
      this.$q.dialog({
        component: ExerciseLauncher,
        parent: this,
        device: device,
        exercises: this.exercises,
        patients: this.patients
      }).onOk((data) => {
        this.launchExercise({ user: this.user.id, ...data })
      })
    }
  }
}
</script>
