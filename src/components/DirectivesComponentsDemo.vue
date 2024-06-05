<!-- src/components/DirectivesComponentsDemo.vue -->
<template>
  <div>
    <h2>Directivas</h2>
    <p> es una extensión especial de la sintaxis de HTML que permite a los desarrolladores enlazar dinámicamente el comportamiento del DOM con los datos del componente Vue. Las directivas están precedidas por v- para diferenciarlas de los atributos HTML estándar. (En este caso, usamos <i>v-if</i> para el evento del botón:)</p>
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
