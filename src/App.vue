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
      <!-- <div class="card">
        <ShouldComponentUpdateDemo />
      </div> -->
    </div>
    <h3>Fuente: <a href="https://kinsta.com/es/blog/angular-vs-vue/">Angular vs Vue: Una Comparativa Cara a Cara - Kinsta.com</a></h3>
  </div>
</template>

<script>
import VirtualDomDemo from './components/VirtualDomDemo.vue'
import DataBindingDemo from './components/DataBindingDemo.vue'
import TransitionsDemo from './components/TransitionsDemo.vue'
import ComputedPropertiesDemo from './components/ComputedPropertiesDemo.vue'
import WatchersDemo from './components/WatchersDemo.vue'
import MethodsDemo from './components/MethodsDemo.vue'
import DirectivesComponentsDemo from './components/DirectivesComponentsDemo.vue'
// import ShouldComponentUpdateDemo from './components/ShouldComponentUpdateDemo.vue'

// Importa el archivo de estilos
import './styles.css'

export default {
  name: 'App',
  components: {
    VirtualDomDemo,
    DataBindingDemo,
    TransitionsDemo,
    ComputedPropertiesDemo,
    WatchersDemo,
    MethodsDemo,
    DirectivesComponentsDemo,
    // ShouldComponentUpdateDemo
  }
}
</script>
