<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import vueJsonEditor from 'vue-json-editor'
export default {
  name: 'app',
  data () {
    return {
      json: {
        name: 'liu77'
      }
    }
  },
  components: {
    vueJsonEditor
  }
}
</script>
