<script>
import { socket, state } from '@/socket'

export default {
  name: 'MyForm',

  data() {
    return {
      isLoading: false,
      value: '',
      socketState: state
    }
  },

  methods: {
    onSubmit() {
      this.isLoading = true
      socket.timeout(1000).emit('create-something', this.value, () => {
        this.isLoading = false
      })
    }
  }
}
</script>

<template>
  <form @submit.prevent="onSubmit">
    <input v-model="value" placeholder="Insert your name" />
    <button type="submit" :disabled="isLoading">Submit</button>
  </form>

  <!-- If there's a response from server, we will show the value -->
  <p v-if="socketState.returnMessage">{{ socketState.returnMessage }}</p>
</template>

<style scoped>
form {
  display: flex;
  gap: 0.5em;
}
</style>
