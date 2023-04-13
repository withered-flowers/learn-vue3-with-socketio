<script>
import ConnectionManager from './components/ConnectionManager.vue'
import ConnectionState from './components/ConnectionState.vue'

export default {
  name: 'App',
  components: {
    ConnectionManager,
    ConnectionState
  }
}
</script>

<template>
  <main>
    <h1>Halo Dunia</h1>
    <ConnectionManager />
    <ConnectionState />
  </main>
</template>

<style scoped></style>
