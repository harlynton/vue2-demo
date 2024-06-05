<!-- src/components/MethodsDemo.vue -->
<template>
  <div>
    <h2>Métodos</h2>
    <p>{{ reversedMessage }}</p>
    <input v-model="message" placeholder="Escribe algo">
    <button @click="reverseMessage">Revertir Mensaje</button>
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
    reversedMessage() {
      return this.message.split('').reverse().join('')
    }
  },
  methods: {
    reverseMessage() {
      this.message = this.message.split('').reverse().join('')
    }
  }
}
</script>
