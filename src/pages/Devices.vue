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
import TaskLauncher from "components/TaskLauncher"
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
    ...mapActions("sockets", ["launchTask"]),
    ...mapActions("devices", ["getDevices"]),
    deviceSelected (device) {
      this.$q.dialog({
        component: TaskLauncher,
        parent: this,
        device: device,
        exercises: this.exercises,
        patients: this.patients
      }).onOk((data) => {
        this.launchTask({ user: this.user.id, ...data })
      })
    }
  }
}
</script>
