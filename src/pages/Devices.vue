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
import { Devices } from "../services"
import ExerciseLauncher from "components/ExerciseLauncher"

export default {
  components: {
    DeviceCard: () => import("components/DeviceCard"),
    BreadCrumbs: () => import("components/Dashboard/BreadCrumbs")
  },
  data () {
    return {
      devices: []
    }
  },
  async mounted () {
    const { data } = await Devices.getDevices()
    this.devices = data
  },
  methods: {
    deviceSelected (device) {
      this.$q.dialog({
        component: ExerciseLauncher,
        parent: this,
        device: device
      }).onOk((data) => {
        console.log(data)
      })
    }
  }
}
</script>
