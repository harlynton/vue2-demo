<!-- src/components/DirectivesComponentsDemo.vue -->
<template>
  <div>
    <h2>Directivas vs. Componentes</h2>
    <p v-if="isVisible">Esto es una directiva</p>
    <toggle-button @toggle="isVisible = !isVisible"></toggle-button>
  </div>
</template>

<script>
import ToggleButton from './ToggleButton.vue'

export default {
  data() {
    return {
      isVisible: true
    }
  },
  components: {
    ToggleButton
  }
}
</script>
