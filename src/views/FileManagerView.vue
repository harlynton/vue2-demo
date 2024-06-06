<template>
  <div class="about">
    <FileManager/>
    <FileList />
  </div>
</template>

<script>
// @ is an alias to /src
import FileManager from '@/components/FileManager.vue'
import FileList from '@/components/FileList.vue'

export default {
  name: 'FileManagerView',
  components: {
    FileManager,
    FileList
  }
}
</script>