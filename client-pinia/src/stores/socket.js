import { defineStore } from 'pinia'
import { io } from 'socket.io-client'

const URL = 'http://localhost:3000'

// (Not needed anymore)
// // We need to declare the socket here due to pinia's reactivity
// let socket = io(URL)

export const useSocketStore = defineStore('socket', {
  state: () => {
    return {
      // We need to store the socket in here because we need to do emit
      socket: undefined,
      connected: false,
      returnMessage: ''
    }
  },
  actions: {
    // Connecting to Server
    connectToSocketServer() {
      if (!this.socket) {
        this.socket = io(URL)
        this.connected = true
      }
    },
    // Socket Event Subscriber
    subscribeSocketEvent() {
      if (this.socket) {
        // We will declare the socket event receiver here
        this.socket.on('connect', () => {
          useSocketStore().connected = true
        })

        this.socket.on('disconnect', () => {
          useSocketStore().connected = false
        })

        this.socket.on('create-something-response', (returnMessage) => {
          useSocketStore().returnMessage = returnMessage
        })
      }
    },
    sendToServer(value, callback) {
      // socket event emitter
      this.socket.timeout(1000).emit('create-something', value, callback)
    }
  }
})

// (Not needed anymore)
// // We will declare the socket event receiver here
// socket.on('connect', () => {
//   useSocketStore().connected = true
// })

// socket.on('disconnect', () => {
//   useSocketStore().connected = false
// })

// // If we get a response from the server
// socket.on('create-something-response', (returnMessage) => {
//   useSocketStore().returnMessage = returnMessage
// })
