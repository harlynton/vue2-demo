<template>
  <div id="app">
    <h1>Demostración de Vue 2</h1>
    <p>Estas son las principales bondades de Vue 2 frente a Angular</p>
    <div class="card-container">
      <div class="card">
        <VirtualDomDemo />
      </div>
      <div class="card">
        <DataBindingDemo />
      </div>
      <div class="card">
        <TransitionsDemo />
      </div>
      <div class="card">
        <ComputedPropertiesDemo />
      </div>
      <div class="card">
        <WatchersDemo />
      </div>
      <div class="card">
        <MethodsDemo />
      </div>
      <div class="card">
        <DirectivesComponentsDemo />
      </div>
    </div>
    <h3>Fuente: <a href="https://kinsta.com/es/blog/angular-vs-vue/">Angular vs Vue: Una Comparativa Cara a Cara - Kinsta.com</a></h3>
  </div>
</template>

<script>
import VirtualDomDemo from './VirtualDomDemo.vue'
import DataBindingDemo from './DataBindingDemo.vue'
import TransitionsDemo from './TransitionsDemo.vue'
import ComputedPropertiesDemo from './ComputedPropertiesDemo.vue'
import WatchersDemo from './WatchersDemo.vue'
import MethodsDemo from './MethodsDemo.vue'
import DirectivesComponentsDemo from './DirectivesComponentsDemo.vue'

// Importa el archivo de estilos
import '../styles.css'

export default {
  name: 'App',
  components: {
    VirtualDomDemo,
    DataBindingDemo,
    TransitionsDemo,
    ComputedPropertiesDemo,
    WatchersDemo,
    MethodsDemo,
    DirectivesComponentsDemo
  }
}
</script>
