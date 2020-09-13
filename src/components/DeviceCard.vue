<template>
  <div class="q-pa-md col-md-4 col-lg-3 col-xs-12">
    <q-card class="device-card" @click="selected">
      <q-img src="https://res.cloudinary.com/revidace/image/upload/q_auto,f_auto/quest_oqwgmf.jpg">
        <div class="absolute-bottom text-subtitle2 text-center">{{ device.name }}</div>
      </q-img>

      <q-inner-loading :showing="device.task != null">
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
    selected () {
      if (!this.device.task) this.$emit("onSelected", this.device)
    }
  }
}
</script>
