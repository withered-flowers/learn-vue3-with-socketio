<script>
import { mapState } from 'pinia'
import { useSocketStore } from '../stores/socket'

export default {
  name: 'ConnectionState',

  computed: {
    ...mapState(useSocketStore, ['connected'])
  }
}
</script>

<template>
  <p>State: {{ connected }}</p>
</template>
