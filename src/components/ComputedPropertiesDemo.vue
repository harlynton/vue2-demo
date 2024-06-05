<!-- src/components/ComputedPropertiesDemo.vue -->
<template>
  <div>
    <h2>Propiedades Computadas</h2>
    <p>Nombre Completo: {{ fullName }}</p>
    <input v-model="firstName" placeholder="Nombre">
    <input v-model="lastName" placeholder="Apellido">
  </div>
</template>

<script>
export default {
  data() {
    return {
      firstName: '',
      lastName: ''
    }
  },
  computed: {
    fullName() {
      return `${this.firstName} ${this.lastName}`
    }
  }
}
</script>
