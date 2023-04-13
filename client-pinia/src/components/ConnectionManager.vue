<script>
import { mapState } from 'pinia'
import { useSocketStore } from '../stores/socket'

export default {
  name: 'ConnectionManager',
  computed: {
    ...mapState(useSocketStore, ['socket'])
  },
  methods: {
    connect() {
      this.socket.connect()
    },
    disconnect() {
      this.socket.disconnect()
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
