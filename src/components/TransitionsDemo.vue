<!-- src/components/TransitionsDemo.vue -->
<template>
  <div>
    <h2>Transiciones y Animaciones CSS</h2>
    <p>El componente <i>'Transition'</i> rodea el texto, para hacerlo aparecer/ desaparecer:</p>
    <button @click="toggle">Mostrar/Ocultar</button>
    <transition name="fade">
      <p v-if="show">Esto es una transición con CSS</p>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: true
    }
  },
  methods: {
    toggle() {
      this.show = !this.show
    }
  }
}
</script>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity 1s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0;
}
</style>
