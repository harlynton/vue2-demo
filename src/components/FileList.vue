<!-- /src/components/FileList.vue -->
<template>
  <div>
    <h2>Lista de Archivos</h2>
    <table>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Tamaño (bytes)</th>
          <th>Tipo</th>
          <th>Última modificación</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="file in files" :key="file.name" @click="selectFile(file)">
          <td>{{ file.name }}</td>
          <td>{{ file.size }}</td>
          <td>{{ file.contentType }}</td>
          <td>{{ new Date(file.updated).toLocaleString() }}</td>
        </tr>
      </tbody>
    </table>
    <p v-if="message">{{ message }}</p>

    <!-- Modal -->
    <div v-if="selectedFile" class="modal">
      <div class="modal-content">
        <span class="close" @click="closeModal">&times;</span>
        <h3>Ingrese la contraseña para descargar el archivo</h3>
        <input type="password" v-model="password" />
        <button @click="downloadFile">Enviar</button>
        <p v-if="modalMessage">{{ modalMessage }}</p>
      </div>
    </div>
    <div v-if="selectedFile" class="modal-overlay" @click="closeModal"></div>
  </div>
</template>

<script>
import { ref, listAll, getMetadata, getDownloadURL } from 'firebase/storage';
import { storage } from '../firebase';

export default {
  name: 'FileList',
  data() {
    return {
      files: [],
      message: '',
      selectedFile: null,
      password: '',
      modalMessage: '',
      correctPassword: 'campanita'
    };
  },
  async created() {
    try {
      const storageRef = ref(storage, '/');
      const result = await listAll(storageRef);

      const filesWithMetadata = await Promise.all(result.items.map(async (item) => {
        const metadata = await getMetadata(item);
        return {
          name: item.name,
          size: metadata.size,
          contentType: metadata.contentType,
          updated: metadata.updated,
          ref: item,
        };
      }));

      this.files = filesWithMetadata;

    } catch (error) {
      this.message = `Error cargando archivos: ${error.message}`;
      console.error('Error cargando archivos:', error);
    }
  },
  methods: {
    selectFile(file) {
      this.selectedFile = file;
      this.password = '';
      this.modalMessage = '';
    },
    closeModal() {
      this.selectedFile = null;
    },
    async downloadFile() {
      if (this.password === this.correctPassword) {
        try {
          const url = await getDownloadURL(this.selectedFile.ref);
          if (this.selectedFile.contentType === 'application/pdf' || this.selectedFile.contentType === 'image/png') {
            // Abrir PDF en una nueva pestaña
            window.open(url, '_blank');
          } else {
            // Descargar otros archivos
            const a = document.createElement('a');
            a.href = url;
            a.download = this.selectedFile.name;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
          }
          this.closeModal();
        } catch (error) {
          this.modalMessage = `Error descargando el archivo: ${error.message}`;
          console.error('Error descargando el archivo:', error);
        }
      } else {
        this.modalMessage = 'Contraseña incorrecta';
      }
    }
  }
};
</script>

<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
  margin: 20px 0;
}

th, td {
  border: 1px solid #ddd;
  padding: 8px;
}

th {
  background-color: #f2f2f2;
  text-align: left;
}

tbody tr:hover {
  background-color: #f1f1f1;
}

.modal {
  display: block;
  position: fixed;
  z-index: 1000;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
}

.modal-content {
  background-color: #fefefe;
  margin: 15% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
  position: relative;
  z-index: 1001;
}

.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
  cursor: pointer;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 100;
}
</style>
