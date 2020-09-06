<template>
  <q-page class="q-pa-md">
    <BreadCrumbs label="Results" icon="assignment" />
    <q-table
      title="Results"
      row-key="id"
      :data="data"
      :columns="columns"
      :filter="filter"
      :pagination="{rowsPerPage: 15}"
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
      <template v-slot:body-cell-actions="props">
        <q-td :props="props">
          <q-btn
            icon="assignment"
            color="primary"
            :label="$q.screen.gt.md ? 'Details' : ''"
            outline
            no-caps
            @click="showResultDetails(props.row)"
          />
        </q-td>
      </template>
      <template v-slot:loading>
        <q-inner-loading showing color="primary" />
      </template>
    </q-table>
  </q-page>
</template>

<script>
import { date, format } from "quasar"
import { Results } from "../services"
const { capitalize } = format

export default {
  name: "Results",
  components: {
    BreadCrumbs: () => import("components/Dashboard/BreadCrumbs")
  },
  data () {
    return {
      loading: false,
      filter: "",
      columns: [
        {
          name: "patient",
          label: "Patient",
          field: (row) => row.patient.name,
          align: "center"
        },
        {
          name: "user",
          label: "User",
          field: (row) => row.user.displayName,
          align: "center"
        },
        {
          name: "device",
          label: "Device",
          field: (row) => row.device.name,
          align: "center"
        },
        {
          name: "exercise",
          label: "Exercise",
          field: (row) => row.exercise.name,
          align: "center"
        },
        {
          name: "profile",
          label: "Profile",
          field: "profile",
          align: "center",
          format: (val) => capitalize(val)
        },
        {
          name: "createdAt",
          label: "Created",
          field: "createdAt",
          align: "center",
          format: (val) => date.formatDate(val, "HH:mm:ss DD-MM-YYYY")
        },
        { name: "actions", label: "", field: "actions", align: "center" }
      ],
      data: []
    }
  },
  async mounted () {
    this.loading = true
    try {
      const { data } = await Results.getResults({
        populate: ["patient", "user", "device", "exercise"],
        fields: [
          "patient.name",
          "user.displayName",
          "device.name",
          "exercise.name"
        ]
      })
      console.log(data)
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
    },
    showResultDetails (result) {
      console.log("Showing results...")
    }
  }
}
</script>
