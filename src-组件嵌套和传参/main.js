import Vue from 'vue'
import App from './App.vue'
// import { Button } from 'element-ui';
import router from "./router/index"
// Vue.component(Button.name,Button)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  el:"#app",
  component:{App},
  router
})
