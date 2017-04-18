<template>
  <div id="app">
    <h1>活动1</h1>
    <header>
      <a href="index.html">首页</a>
    </header>
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
