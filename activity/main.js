import Vue from 'vue'
import App from './App.vue'
import MintUi from 'mint-ui'
import 'mint-ui/lib/style.css'

Vue.use(MintUi)

new Vue({
  el: '#app',
  components: {
    App
  },
  render (h) {
    return h('App')
  }
})
