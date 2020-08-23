<template>
  <q-markup-table v-if="exercise" wrap-cells>
    <thead>
      <tr>
        <th class="text-left">Name</th>
        <th class="text-left">Description</th>
        <th class="text-left">Value</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(value, key) in exercise.parameters" :key="key">
        <td class="text-left">{{ value.name }}</td>
        <td class="text-left">{{ value.description }}</td>
        <td class="text-left">{{ exercise.profiles[profile][key]}}</td>
      </tr>
    </tbody>
  </q-markup-table>
</template>

<script>
export default {
  name: "ExerciseParameters",
  props: {
    exercise: Object,
    profile: String
  }
}
</script>
