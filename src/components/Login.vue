<template>
  <q-form @submit="onLogin">
    <q-input
      class="q-mb-md"
      outlined
      v-model="form.email"
      type="email"
      label="Email" />
    <q-input
      class="q-mb-md"
      outlined
      v-model="form.password"
      type="password"
      label="Contraseña" />

      <q-btn label="Ingresar" type="submit" color="primary"/>
  </q-form>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data () {
    return {
      form: {
        email: null,
        password: null
      }
    }
  },
  methods: {
    ...mapActions('auth', ['login']),
    onLogin () {
      this.login(this.form)
    }
  }
}
</script>
