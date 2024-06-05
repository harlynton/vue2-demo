<template>
  <div>
    <h2>Vinculación de Datos</h2>
    <p>Usando <i>v-bind</i>, Se pueden editar o asignar valores a las propiedades HTML, modificar formatos y asignar clases.</p>
    <p>Imagen dinámica:</p>
    <img v-bind:src="imageSrc" alt="Imagen dinámica" />
    <p>Enlace dinámico:</p>
    <a v-bind:href="linkHref" target="_blank">{{ linkText }}</a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imageSrc: 'https://via.placeholder.com/150',
      linkHref: 'https://www.google.com',
      linkText: 'Ir a Google'
    }
  }
}
</script>

<style scoped>
img {
  display: center;
  margin: 10px 0;
}

a {
  display: block;
  color: #007bff;
  text-decoration: none;
  margin: 10px 0;
}

a:hover {
  text-decoration: underline;
}
</style>
