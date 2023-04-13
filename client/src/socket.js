import { reactive } from 'vue'
import { io } from 'socket.io-client'

export const state = reactive({
  connected: false,
  // This is the value of returned message from server
  returnMessage: ''
})

// Localhost only, change this if you use environment variable / another static value
const URL = 'http://localhost:3000'

export const socket = io(URL)

socket.on('connect', () => {
  state.connected = true
})

socket.on('disconnect', () => {
  state.connected = false
})

// If we get a response from the server
socket.on('create-something-response', (returnMessage) => {
  state.returnMessage = returnMessage
})
