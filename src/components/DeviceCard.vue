<template>
  <div class="q-pa-md col-md-4 col-lg-3 col-xs-12">
    <q-card class="device-card" @click="sendExercise">
      <q-img src="https://i.imgur.com/EgjuEwS.jpeg">
        <div class="absolute-bottom text-subtitle2 text-center">{{ device.name }}</div>
      </q-img>

      <q-inner-loading :showing="device.busy">
        <q-spinner-grid size="50px" color="primary" />
      </q-inner-loading>
    </q-card>
  </div>
</template>

<script>
export default {
  props: {
    device: Object
  },
  methods: {
    sendExercise () {
      this.$emit("onSendExercise", this.device)
    }
  }
}
</script>
