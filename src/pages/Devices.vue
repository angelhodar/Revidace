<template>
  <q-page class="q-pa-md">
    <BreadCrumbs label="Devices" icon="contactless" />
    <q-table
      title="Devices"
      :data="data"
      :columns="columns"
      :filter="filter"
      row-key="id"
      :loading="loading"
    >
      <template v-slot:top>
        <q-btn
          outline
          class="q-ml-sm"
          color="primary"
          icon="insert_drive_file"
          label="Export CSV"
          :disable="loading"
          no-caps
          @click="exportTable"
        />
        <q-space />
        <q-input rounded outlined dense debounce="300" color="primary" v-model="filter">
          <template v-slot:append>
            <q-icon name="person_search" />
          </template>
        </q-input>
      </template>
      <template v-slot:body-cell-busy="props">
        <q-td :props="props">
          <div>
            <q-toggle v-model="props.row.busy" />
          </div>
        </q-td>
      </template>
      <template v-slot:body-cell-socket="props">
        <q-td :props="props">
          <div v-if="props.row.socket != null">
            <div class="text-weight-regular">Connected</div>
          </div>
          <div v-else>
            <div class="text-weight-regular">Disconnected</div>
          </div>
        </q-td>
      </template>
      <template v-slot:loading>
        <q-inner-loading showing color="primary" />
      </template>
    </q-table>
  </q-page>
</template>

<script>
import { date } from "quasar"
import { Devices } from "../services"

export default {
  name: "Devices",
  components: {
    BreadCrumbs: () => import("components/Dashboard/BreadCrumbs")
  },
  data () {
    return {
      loading: false,
      filter: "",
      columns: [
        { name: "name", label: "Name", field: "name", align: "center" },
        { name: "socket", label: "State", field: "socket", align: "center" },
        { name: "busy", label: "Busy", field: "busy", align: "center" },
        { name: "lastConnection", label: "Last Connection", field: "lastConnection", align: "center", format: val => date.formatDate(val, "HH:mm:ss DD-MM-YYYY") }
      ],
      data: []
    }
  },
  async mounted () {
    this.loading = true
    try {
      const { data } = await Devices.getDevices()
      this.data = data
    } catch (err) {
      console.log(err)
    } finally {
      this.loading = false
    }
  },
  methods: {
    exportTable () {
      console.log("Exporting...")
    }
  }
}
</script>
