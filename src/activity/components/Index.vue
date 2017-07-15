<template>
  <div class="index">
    <h2>JSON EDITOR</h2>
    <vue-json-editor v-model="json"></vue-json-editor>
    <main-view></main-view>
  </div>
</template>

<script>
import vueJsonEditor from 'vue-json-editor'
import mainView from './MainView.vue'
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
    vueJsonEditor,
    mainView
  }
}
</script>
<style lang="scss">
  h2{
    font-size: 18px;
    color:#333;
  }
</style>
