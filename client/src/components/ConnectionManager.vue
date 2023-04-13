<script>
import { socket } from '@/socket'

export default {
  name: 'ConnectionManager',
  methods: {
    connect() {
      socket.connect()
    },
    disconnect() {
      socket.disconnect()
    }
  }
}
</script>

<template>
  <section>
    <button @click="connect()">Connect</button>
    <button @click="disconnect()">Disconnect</button>
  </section>
</template>

<style scoped>
section {
  display: flex;
  gap: 0.5em;
}
</style>
