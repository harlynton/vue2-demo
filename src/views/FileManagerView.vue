<template>
  <div class="about">
    <FileManager/>
  </div>
</template>

<script>
// @ is an alias to /src
import FileManager from '@/components/FileManager.vue'

export default {
  name: 'FileManagerView',
  components: {
    FileManager
  }
}
</script>