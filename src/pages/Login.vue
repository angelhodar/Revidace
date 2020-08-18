<template>
  <q-page class="flex flex-center">
    <div id="particles-js"></div>
    <q-card v-bind:style="$q.screen.lt.sm?{'width': '70%'}:{'width':'30%'}">
      <q-card-section>
        <q-avatar size="103px" class="absolute-center shadow-10">
          <img src="profile.svg" />
        </q-avatar>
      </q-card-section>
      <q-card-section>
        <div class="text-center q-pt-lg">
          <div class="col text-h6 ellipsis">Login</div>
        </div>
      </q-card-section>
      <q-card-section>
        <q-form @submit="login" class="q-gutter-md">
          <q-input filled v-model="form.email" label="Email" type="email">
            <template v-slot:prepend>
              <q-icon name="email" />
            </template>
          </q-input>
          <q-input filled v-model="form.password" label="Password" type="password">
            <template v-slot:prepend>
              <q-icon name="lock" />
            </template>
          </q-input>
          <q-btn
            push
            rounded
            class="flex flex-center"
            icon="login"
            label="Login"
            type="submit"
            color="primary"
          />
        </q-form>
      </q-card-section>
      <q-card-section>
        <q-btn
          push
          rounded
          @click="loginWithProvider('google')"
          icon="login"
          label="Google"
          type="submit"
          color="orange"
        />
        <q-btn
          push
          rounded
          @click="loginWithProvider('twitter')"
          icon="login"
          label="Twitter"
          type="submit"
          color="blue"
        />
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
import "particles.js"
import particlesConf from "assets/particles.json"
import { mapActions } from "vuex"

export default {
  data () {
    return {
      form: {
        email: "",
        password: ""
      }
    }
  },
  async mounted () {
    this.initParticles()
    const socialToken = this.$route.query.token
    if (socialToken) {
      this.$q.loading.show({ message: "Initializing dashboard..." })
      await this.handleIncomingToken(socialToken)
      this.$q.loading.hide()
      this.$router.push("/dashboard")
    }
  },
  methods: {
    ...mapActions("auth", ["loginWithEmailAndPassword", "loginWithSocialProvider", "handleIncomingToken"]),
    initParticles () {
      window.particlesJS("particles-js", particlesConf)
    },
    loginWithProvider (provider) {
      this.loginWithSocialProvider(provider)
    },
    async login () {
      try {
        this.$q.loading.show({ message: "Authenticating..." })
        await this.loginWithEmailAndPassword(this.form)
        this.$router.push("/dashboard")
      } catch (err) {
        this.$q.notify({ message: err, color: "negative" })
      } finally {
        this.$q.loading.hide()
      }
    }
  }
}
</script>

<style>
#particles-js {
  position: absolute;
  width: 100%;
  height: 100%;
  background: #000000;
}
</style>
