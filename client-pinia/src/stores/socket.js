import { defineStore } from 'pinia'
import { io } from 'socket.io-client'

const URL = 'http://localhost:3000'
// We need to declare the socket here due to pinia's reactivity
let socket = io(URL)

export const useSocketStore = defineStore('socket', {
  state: () => {
    return {
      // We need to store the socket in here because we need to do emit
      socket,
      connected: false,
      returnMessage: ''
    }
  },
  actions: {
    sendToServer(value, callback) {
      // socket event emitter
      this.socket.timeout(1000).emit('create-something', value, callback)
    }
  }
})

// We will declare the socket event receiver here
socket.on('connect', () => {
  useSocketStore().connected = true
})

socket.on('disconnect', () => {
  useSocketStore().connected = false
})

// If we get a response from the server
socket.on('create-something-response', (returnMessage) => {
  useSocketStore().returnMessage = returnMessage
})
