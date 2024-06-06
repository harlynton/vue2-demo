<!-- /src/components/FileManager.vue -->
<template>
  <div>
    <h2>Carga de Archivos</h2>
    <input type="file" @change="onFileChange" accept=".zip" />
    <button @click="uploadFiles" :disabled="!file">Cargar</button>
    <p v-if="message">{{ message }}</p>
  </div>
</template>

<script>
import { storage, ref, uploadBytes } from '../firebase';

export default {
  name: 'FileManager',
  data() {
    return {
      file: null,
      message: ''
    };
  },
  methods: {
    onFileChange(event) {
      const selectedFile = event.target.files[0];
      if (selectedFile && selectedFile.type === 'application/x-zip-compressed') {
        this.file = selectedFile;
        this.message = '';
      } else {
        this.message = 'Solo se permiten archivos en formato ZIP.';
        this.file = null;
      }
    },
    async uploadFiles() {
      if (this.file) {
        const storageRef = ref(storage, this.file.name);
        try {
          await uploadBytes(storageRef, this.file);
          this.message = 'Archivo cargado exitosamente.';
        } catch (error) {
          this.message = `Error cargando archivo: ${error.message}`;
        }
      }
    }
  }
};
</script>

<style scoped>
/* Estilos específicos para FileManager */
</style>
