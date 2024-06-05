<!-- src/components/ToggleButton.vue -->
<template>
  <button @click="toggle">Alternar Visibilidad</button>
</template>

<script>
export default {
  methods: {
    toggle() {
      this.$emit('toggle')
    }
  }
}
</script>
