<template>
  <div id="app">
    <h1>Demostración de Vue 2</h1>
    <VirtualDomDemo />
    <DataBindingDemo />
    <TransitionsDemo />
    <ComputedPropertiesDemo />
    <WatchersDemo />
    <MethodsDemo />
    <DirectivesComponentsDemo />
    <ShouldComponentUpdateDemo />
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
import ShouldComponentUpdateDemo from './components/ShouldComponentUpdateDemo.vue'

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
    ShouldComponentUpdateDemo
  }
}
</script>
