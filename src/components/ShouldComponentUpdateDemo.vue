<!-- src/components/ShouldComponentUpdateDemo.vue -->
<template>
  <div>
    <h2>shouldComponentUpdate (simulado con computadas)</h2>
    <p>Mensaje: {{ filteredMessage }}</p>
    <input v-model="message" placeholder="Escribe algo">
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
    filteredMessage() {
      return this.message.replace(/[aeiou]/gi, '*')
    }
  }
}
</script>
