import { Patients } from "../../services"

export async function getPatients ({ commit }) {
  const { data } = await Patients.getPatients()
  commit("SET_PATIENTS", data)
}
