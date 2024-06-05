<!-- src/components/WatchersDemo.vue -->
<template>
  <div>
    <h2>Observadores</h2>
    <p>Se utilizan en datos que pueden cambiar con frecuencia. Utilizamos los observadores siempre que queramos realizar un cómputo debido a cambios en un atributo de datos específico.</p>
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
