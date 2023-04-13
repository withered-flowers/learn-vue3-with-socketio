<script>
import ConnectionManager from './components/ConnectionManager.vue'
import ConnectionState from './components/ConnectionState.vue'
import MyForm from './components/MyForm.vue'

// Import socket state
import { state } from '@/socket'

export default {
  name: 'App',
  components: {
    ConnectionManager,
    ConnectionState,
    MyForm
  },
  data() {
    return {
      // Set the socket's state into component's state
      // This will trigger re-assignment if socket's state is changed.
      socketState: state
    }
  }
}
</script>

<template>
  <main>
    <h1>Let's Learn Vue with SocketIO</h1>
    <ConnectionManager />
    <ConnectionState />
    <!-- Use the state inside the template -->
    <MyForm v-if="socketState.connected" />
  </main>
</template>

<style scoped>
main {
  font-family: sans-serif;
}
</style>
