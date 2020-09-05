<template>
  <div class="q-pa-md col-md-3 col-xs-12">
    <q-card class="device-card">
      <q-img src="https://picsum.photos/400/200" basic>
        <div class="absolute-bottom text-subtitle2 text-center">{{ device.name }}</div>
      </q-img>

      <q-separator />

      <q-card-actions>
        <q-btn
          outline
          color="primary"
          icon="send"
          label="Send Exercise"
          no-caps
          @click="sendExercise"
        />
      </q-card-actions>

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
