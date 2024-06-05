<!-- src/components/DataBindingDemo.vue -->
<template>
  <div>
    <h2>Vinculación de Datos</h2>
    <input v-model="message" placeholder="Escribe algo">
    <p>Mensaje: {{ message }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: ''
    }
  }
}
</script>
