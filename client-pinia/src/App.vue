<script>
// Import mapState to access the store (pinia) state
// Import mapActions to connect to socket server and subscribe socket event
import { mapActions, mapState } from 'pinia'

import ConnectionManager from '@/components/ConnectionManager.vue'
import ConnectionState from '@/components/ConnectionState.vue'
import MyForm from './components/MyForm.vue'

import { useSocketStore } from './stores/socket'

export default {
  name: 'App',
  components: {
    ConnectionManager,
    ConnectionState,
    MyForm
  },
  computed: {
    // Since we're using the state from store, we can call it directly
    ...mapState(useSocketStore, ['connected'])
  },
  methods: {
    ...mapActions(useSocketStore, ['connectToSocketServer', 'subscribeSocketEvent'])
  },
  // Will call the method on App mounted
  created() {
    this.connectToSocketServer()
    this.subscribeSocketEvent()
  }
}
</script>

<template>
  <main>
    <h1>Let's Learn Vue with SocketIO (Pinia Version)</h1>
    <ConnectionManager />
    <ConnectionState />
    <!-- Use the state inside the template -->
    <MyForm v-if="connected" />
  </main>
</template>

<style scoped></style>
