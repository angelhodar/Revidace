<template>
  <q-dialog ref="dialog" @hide="onDialogHide">
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
        <q-btn outline color="primary" label="Update" @click="onClick" />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script>
import { format } from "quasar"
const { capitalize } = format

export default {
  name: "UserModal",
  props: {
    user: Object
  },
  data () {
    return {
      id: "",
      email: "",
      password: "",
      displayName: "",
      role: "",
      photoURL: "",
      blocked: false,
      roles: ["Admin", "Manager", "User"]
    }
  },
  mounted () {
    if (this.user) this.updateData(this.user)
  },
  methods: {
    updateData () {
      this.id = this.user.id
      this.email = this.user.email
      this.password = this.user.password
      this.displayName = this.user.displayName
      this.role = capitalize(this.user.role)
      this.photoURL = this.user.photoURL
      this.blocked = this.user.blocked
    },
    show () {
      this.$refs.dialog.show()
    },
    hide () {
      this.$refs.dialog.hide()
    },
    onDialogHide () {
      this.$emit("hide")
    },
    onClick () {
      this.$emit("ok", {
        id: this.id,
        data: {
          email: this.email,
          password: this.password,
          displayName: this.displayName,
          role: this.role.toLowerCase(),
          photoURL: this.photoURL,
          blocked: this.blocked
        }
      })
      this.hide()
    }
  }
}
</script>
