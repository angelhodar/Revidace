import io from "socket.io-client"
import VueSocketIOExt from "vue-socket.io-extended"

const socket = io(process.env.API_URL, {
  autoConnect: false // Prevent until user is authenticated
})

export default ({ Vue, store }) => {
  Vue.use(VueSocketIOExt, socket, { store })
}
