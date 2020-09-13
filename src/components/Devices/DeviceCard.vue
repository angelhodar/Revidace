<template>
  <div class="q-pa-md col-md-4 col-lg-3 col-xs-12">
    <q-card class="device-card" @click="selected">
      <q-img src="https://res.cloudinary.com/revidace/image/upload/q_auto,f_auto/quest_oqwgmf.jpg">
        <div v-if="device.socket" class="absolute-bottom text-subtitle2 text-center">{{ name }}</div>
        <div v-else class="absolute-full text-subtitle2 flex flex-center">
          Disconnected
        </div>
      </q-img>

      <q-inner-loading :showing="device.task != null">
        <q-spinner-grid size="50px" color="primary" />
      </q-inner-loading>
    </q-card>
  </div>
</template>

<script>
import { mapActions } from "vuex"

export default {
  props: {
    device: Object
  },
  methods: {
    ...mapActions("devices", ["setName"]),
    selected () {
      if (this.device.name === this.device.hid) {
        this.prompt()
      } else if (!this.device.task) {
        this.$emit("onSelected", this.device)
      }
    },
    prompt () {
      this.$q.dialog({
        title: "Name assignation",
        message: "Enter the name you want for this device",
        prompt: {
          model: "",
          isValid: val => val.length > 4
        },
        cancel: true,
        persistent: true
      }).onOk(name => {
        this.setName({ id: this.device.id, name })
      })
    }
  },
  computed: {
    name () {
      if (this.device.name !== this.device.hid) return this.device.name
      else return this.device.hid.substring(0, 4)
    }
  }
}
</script>
