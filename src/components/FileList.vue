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
        <tr v-for="file in files" :key="file.name">
          <td>{{ file.name }}</td>
          <td>{{ file.size }}</td>
          <td>{{ file.contentType }}</td>
          <td>{{ new Date(file.updated).toLocaleString() }}</td>
        </tr>
      </tbody>
    </table>
    <p v-if="message">{{ message }}</p>
  </div>
</template>

<script>
import { ref, listAll, getMetadata } from 'firebase/storage';
import { storage } from '../firebase';

export default {
  name: 'FileList',
  data() {
    return {
      files: [],
      message: ''
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
</style>
