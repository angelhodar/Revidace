import { Exercises } from "../../services"

export async function getExercises ({ commit }) {
  const { data } = await Exercises.getExercises()
  commit("SET_EXERCISES", data)
}
