<!-- src/components/WatchersDemo.vue -->
<template>
  <div>
    <h2>Observadores</h2>
    <input v-model="message" placeholder="Escribe algo">
    <p>Mensaje (Uppercase): {{ uppercaseMessage }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: ''
    }
  },
  computed: {
    uppercaseMessage() {
      return this.message.toUpperCase()
    }
  },
  watch: {
    message(newValue) {
      console.log('El mensaje ha cambiado a:', newValue)
    }
  }
}
</script>
