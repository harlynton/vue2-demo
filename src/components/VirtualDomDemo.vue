<!-- src/components/VirtualDomDemo.vue -->
<template>
  <div>
    <h2>DOM virtual</h2>
    <p>Es una réplica del DOM principal, que se modifica y se compara con éste al final. Sólo las modificaciones finales que serán visibles para los espectadores aparecerán en el DOM real. </p>
    <p><strong>Valor actual:</strong> {{ realDomValue }}</p>
    <p><strong>Virtual DOM:</strong> {{ virtualDomValue }}</p>
    <button @click="changeVirtualDom">Cambiar Virtual DOM</button>
    <button @click="updateRealDom">Actualizar DOM Real</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      realDomValue: 'Sin cambios',
      virtualDomValue: 'Sin cambios'
    }
  },
  methods: {
    changeVirtualDom() {
      this.virtualDomValue = 'Cambiado en el Virtual DOM';
    },
    updateRealDom() {
      this.realDomValue = this.virtualDomValue;
    }
  }
}
</script>
<style scoped>
button {
  margin: 10px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
}
</style>
