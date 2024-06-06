<!-- /src/components/FileManager.vue -->
<template>
  <div>
    <h2>File Manager</h2>
    <input type="file" @change="onFileChange" accept=".zip" />
    <button @click="uploadFile" :disabled="!file">Upload</button>
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
      console.log(selectedFile.type)
      if (selectedFile && selectedFile.type === 'application/x-zip-compressed') {
        this.file = selectedFile;
        this.message = '';
      } else {
        this.message = 'Please select a ZIP file';
        this.file = null;
      }
    },
    async uploadFile() {
      if (this.file) {
        const storageRef = ref(storage, this.file.name);
        try {
          await uploadBytes(storageRef, this.file);
          this.message = 'File uploaded successfully!';
        } catch (error) {
          this.message = `Error uploading file: ${error.message}`;
        }
      }
    }
  }
};
</script>

<style scoped>
/* Estilos específicos para FileManager */
</style>
