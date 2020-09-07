<template>
  <q-page-container>
    <q-page class="q-pa-lg">
      <HomeBanner :title="title" :subtitle="subtitle" />

      <HomeSection
        v-for="section in sections"
        :key="section.title"
        v-bind="section"
      />

      <div class="column items-center">
        <ExerciseProfiles />
      </div>
    </q-page>
  </q-page-container>
</template>

<script>
export default {
  name: "Index",
  components: {
    HomeBanner: () => import("components/Home/HomeBanner"),
    HomeSection: () => import("components/Home/HomeSection"),
    ExerciseProfiles: () => import("components/Exercises/ExerciseProfiles")
  },
  data () {
    return {
      title: "Revidace",
      subtitle: "Automated virtual reality exercises for people with acquired brain damage",
      sections: [
        {
          icon: "edit",
          title: "Diverso",
          description: "Amplio catálogo de ejercicios para adaptarse a la patología concreta de cada paciente"
        },
        {
          icon: "settings",
          title: "Personalizable",
          description: "Personaliza la dificultad de cada ejercicio con los parámetros que se ajusten mejor a cada paciente"
        }
      ]
    }
  }
}
</script>
