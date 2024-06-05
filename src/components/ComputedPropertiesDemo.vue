<!-- src/components/ComputedPropertiesDemo.vue -->
<template>
  <div>
    <h2>Propiedades Calculadas</h2>
    <p>Usamos esta propiedad cuando querems mutar un parámetro que depende de la alteración de otra variable:</p>
    <p><strong>Nombre Completo:</strong> {{ fullName }}</p>
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
