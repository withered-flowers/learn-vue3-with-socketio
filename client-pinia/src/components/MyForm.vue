<script>
// Now we will use mapActions and mapState here
import { mapActions, mapState } from 'pinia'
import { useSocketStore } from '../stores/socket'

export default {
  name: 'MyForm',
  computed: {
    ...mapState(useSocketStore, ['socket', 'returnMessage'])
  },

  data() {
    return {
      isLoading: false,
      value: ''
    }
  },

  methods: {
    ...mapActions(useSocketStore, ['sendToServer']),

    onSubmit() {
      this.isLoading = true
      // Now we can extract this function to the actions of pinia
      // this.socket.timeout(1000).emit('create-something', this.value, () => {
      //   this.isLoading = false
      // })

      // We will use the sendToServer from pinia's action here
      this.sendToServer(this.value, () => {
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
  <p v-if="returnMessage">{{ returnMessage }}</p>
</template>

<style scoped>
form {
  display: flex;
  gap: 0.5em;
}
</style>
