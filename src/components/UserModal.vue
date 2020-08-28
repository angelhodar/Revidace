<template>
  <q-dialog v-model="shown">
    <q-card class="q-pa-md">
      <q-card-section>
        <div class="text-h4 text-center">User</div>
      </q-card-section>

      <q-card-section class="q-gutter-md">
        <q-input outlined v-model="email" label="Email" type="email" />
        <q-input outlined v-model="password" label="Password" type="password" />
        <q-input outlined v-model="displayName" label="Name" />
        <q-select outlined v-model="role" :options="roles" label="Role" />
        <q-input outlined v-model="photoURL" type="url" label="Photo URL" />
        <q-toggle v-model="blocked" label="Blocked" />
      </q-card-section>
      <q-card-actions>
        <q-btn v-close-popup outline color="primary" label="Update" />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script>
export default {
  name: "UserModal",
  props: {
    user: Object
  },
  data () {
    return {
      shown: false,
      email: "",
      password: "",
      displayName: "",
      role: "",
      photoURL: "",
      blocked: false,
      roles: ["Admin", "Manager", "User"]
    }
  },
  methods: {
    updateData () {
      this.email = this.user.email
      this.password = this.user.password
      this.displayName = this.user.displayName
      this.role = this.user.role
      this.photoURL = this.user.photoURL
      this.blocked = this.user.blocked
    },
    onClick () {
      // TODO: API call POST if not editing user PUT otherwise
    }
  },
  watch: {
    user: function (val) {
      if (val != null) {
        this.user = val
        this.updateData()
        this.shown = true
      } else {
        this.shown = false
      }
    }
  }
}
</script>
