<!-- /src/components/FileManager.vue -->
<template>
  <div>
    <h2>File Manager</h2>
    <input type="file" @change="onFileChange" accept=".zip" />
    <button @click="uploadFiles" :disabled="!file">Upload</button>
    <p v-if="message">{{ message }}</p>
  </div>
</template>

<script>
import JSZip from 'jszip';
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
        this.message = 'Please select a ZIP file';
        this.file = null;
      }
    },
    async uploadFiles() {
      if (this.file) {
        try {
          const zip = new JSZip();
          const content = await zip.loadAsync(this.file);
          const files = Object.keys(content.files);

          for (const filename of files) {
            const fileData = await content.files[filename].async('blob');
            const storageRef = ref(storage, filename);
            await uploadBytes(storageRef, fileData);
          }

          this.message = 'Files uploaded successfully!';
        } catch (error) {
          this.message = `Error uploading files: ${error.message}`;
        }
      }
    }
  }
};
</script>

<style scoped>
/* Estilos específicos para FileManager */
</style>
