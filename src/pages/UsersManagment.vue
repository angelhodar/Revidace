<template>
  <q-page class="q-pa-md">
    <q-table title="Users" :data="data" :columns="columns" row-key="_id" :loading="loading">
      <template v-slot:body-cell-role="props">
        <q-td :props="props">
          <div>
            <q-btn-toggle
              v-model="props.row.role"
              size="md"
              no-caps
              flat
              toggle-color="primary"
              :options="[
                  {label: 'User', value: 'user'},
                  {label: 'Manager', value: 'manager'},
                  {label: 'Admin', value: 'admin'}
                ]"
            />
          </div>
        </q-td>
      </template>
      <template v-slot:body-cell-disabled="props">
        <q-td :props="props">
          <div>
            <q-toggle v-model="props.row.disabled" />
          </div>
        </q-td>
      </template>
      <template v-slot:body-cell-actions="props">
        <q-td :props="props">
          <q-btn icon="edit" to="/dashboard/users/edit" color="blue-8" flat dense />
          <q-btn icon="delete" color="red" class="q-ml-sm" flat dense />
        </q-td>
      </template>
      <template v-slot:loading>
        <q-inner-loading showing color="primary" />
      </template>
      <template v-slot:top-right>
        <q-btn
          color="primary"
          icon-right="archive"
          label="Export CSV"
          no-caps
          @click="exportTable"
        />
      </template>
    </q-table>
  </q-page>
</template>

<script>
import { date } from "quasar"

export default {
  name: "UsersManagment",
  data () {
    return {
      loading: false,
      columns: [
        { name: "email", label: "Email", field: "email", align: "center" },
        { name: "name", label: "Name", field: "displayName", align: "center" },
        { name: "role", label: "Role", field: "role", align: "center", format: val => val.charAt(0).toUpperCase() + val.slice(1) },
        { name: "createdAt", label: "Created", field: "createdAt", align: "center", format: val => date.formatDate(val, "HH:mm:ss DD-MM-YYYY") },
        { name: "lastSignInTime", label: "Last Connection", field: "lastSignInTime", align: "center", format: val => date.formatDate(val, "HH:mm:ss DD-MM-YYYY") },
        { name: "disabled", label: "Disabled", field: "disabled", align: "center" },
        { name: "actions", label: "", field: "actions", align: "center" }
      ],
      data: []
    }
  },
  mounted () {
    this.loading = true
    this.getUsersData()
  },
  methods: {
    async getUsersData () {
      const res = await this.$http.get("http://localhost:5000/api/v1/users")
      this.data = res.data
      this.loading = false
    },
    exportTable () {
      console.log("Exporting...")
    }
  }
}
</script>
