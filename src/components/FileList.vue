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
        <button @click="validatePassword">Enviar</button>
        <p v-if="modalMessage">{{ modalMessage }}</p>
      </div>
    </div>
    <div v-if="selectedFile" class="modal-overlay" @click="closeModal"></div>
  </div>
</template>

<script>
import axios from 'axios';
import { db, storage } from '../firebase';
import { collection, getDocs } from "firebase/firestore";
import { ref, getDownloadURL } from 'firebase/storage';

export default {
  name: 'FileList',
  data() {
    return {
      files: [],
      message: '',
      selectedFile: null,
      password: '',
      modalMessage: '',
    };
  },
  async created() {
    await this.fetchData();
  },
  methods: {
    async fetchData() {
      try {
        console.log("Fetching data from Firestore...");
        const querySnapshot = await getDocs(collection(db, "filesData"));
        const filesData = [];
        querySnapshot.forEach(doc => {
          const data = doc.data();
          filesData.push({
            id: doc.id,
            name: data.nombreArchivo,
            size: data.pesoArchivo,
            contentType: data.tipoArchivo,
            updated: data.ultimaModificacionArchivo
          });
        });
        this.files = filesData;
      } catch (error) {
        console.error("Error fetching data: ", error);
        this.message = `Error cargando archivos: ${error.message}`;
      }
    },
    selectFile(file) {
      this.selectedFile = file;
      this.password = '';
      this.modalMessage = '';
    },
    closeModal() {
      this.selectedFile = null;
    },
    async validatePassword() {
      try {
        const response = await axios.post('https://us-central1-vue2-demo-3b507.cloudfunctions.net/validatePassword', {
          password: this.password
        }, {
          headers: {
            'Content-Type': 'application/json'
          }
        });

        if (response.data.message === 'Password correct') {
          this.downloadFile();
        } else {
          this.modalMessage = 'Contraseña incorrecta';
        }
      } catch (error) {
        console.error('Error validating password:', error);
        this.modalMessage = `Error: ${error.response ? error.response.data : error.message}`;
      }
    },
    async downloadFile() {
      try {
        const storageRef = ref(storage, `gs://vue2-demo-3b507.appspot.com/${this.selectedFile.name}`);
        const url = await getDownloadURL(storageRef);

        window.open(url, '_blank');
        this.closeModal();
      } catch (error) {
        this.modalMessage = `Error descargando el archivo: ${error.message}`;
        console.error('Error descargando el archivo:', error);
      }
    }
  }
};
</script>

<style scoped>
/* Mantén tus estilos CSS aquí */
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
