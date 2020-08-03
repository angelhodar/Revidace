<template>
  <q-layout>
    <q-page-container>
      <q-page class="flex flex-center">
        <div id="particles-js"></div>
        <q-card
          class="login-form"
          v-bind:style="$q.platform.is.mobile?{'width': '80%'}:{'width':'30%'}"
        >
          <q-card-section>
            <q-form @submit="onLogin" class="q-gutter-md">
              <q-input filled v-model="form.email" label="Email" type="email"/>
              <q-input filled v-model="form.password" label="Password" type="password" />
              <q-btn label="Login" to="/dashboard" type="button" color="primary" />
            </q-form>
          </q-card-section>
        </q-card>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import 'particles.js'
import particlesConf from 'assets/particles.json'
import { mapActions } from 'vuex'

export default {
  data () {
    return {
      form : {
        email: null,
        password: null
      }
    }
  },
  mounted () {
    this.initParticles()
  },
  methods: {
    ...mapActions('auth', ['login']),
    initParticles () {
      window.particlesJS('particles-js', particlesConf)
    },
    onLogin () {
      this.login(this.form)
    }
  }
}
</script>

<style>
#particles-js {
  position: absolute;
  width: 100%;
  height: 100%;
  background: #232741;
}
.login-form {
  position: absolute;
}
</style>
