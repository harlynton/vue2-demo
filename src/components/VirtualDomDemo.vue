<!-- src/components/VirtualDomDemo.vue -->
<template>
  <div>
    <h2>Virtual DOM</h2>
    <p>Contador: {{ count }}</p>
    <button @click="increment">Incrementar</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 0
    }
  },
  methods: {
    increment() {
      this.count++
    }
  }
}
</script>
