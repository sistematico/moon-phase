// Base
import Vue from 'vue'

// Material
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default-dark.css'

// App
import App from './App.vue'

Vue.use(VueMaterial)
Vue.config.productionTip = false

//var app = new Vue({
new Vue({
  el: '#app',
  methods: {
    humanizeURL: function (url) {
      return url
        .replace(/^https?:\/\//, '')
        .replace(/\/$/, '')
    }
  },
  render: function (h) { return h(App) }
})
