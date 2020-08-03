<template>
  <q-layout view="lHh Lpr lff">
    <Header :togglePanel="false" />

    <q-page-container>
      <div class="q-pa-md">
        <div class="q-gutter-md" style="max-width: 600px">
          <q-card>
            <q-tabs
              v-model="tab"
              class="text-grey"
              active-color="primary"
              indicator-color="primary"
              align="justify"
              narrow-indicator
            >
              <q-tab name="login" label="Ingresar" />
              <q-tab name="register" label="Registro" />
            </q-tabs>

            <q-separator />

            <q-tab-panels v-model="tab" animated>
              <q-tab-panel name="login">
                <Login />
              </q-tab-panel>

              <q-tab-panel name="register">
                <Register />
              </q-tab-panel>
            </q-tab-panels>
          </q-card>
        </div>
      </div>
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  components: {
    Header: () => import("components/Header"),
    Login: () => import("components/Login"),
    Register: () => import("components/Register"),
  },
  data() {
    return {
      tab: "login",
    };
  },
};
</script>
