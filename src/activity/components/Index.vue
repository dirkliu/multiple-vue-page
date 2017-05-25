<template>
  <div class="index">
    <h2>JSON EDITOR</h2>
    <vue-json-editor v-model="json"></vue-json-editor>
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
<style>
  h2{
    font-size: 18px;
    color:#333;
  }
</style>
