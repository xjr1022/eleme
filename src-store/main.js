import Vue from 'vue'
import App from './App.vue'
import store from './store/index'
import {Button,Checkbox} from 'element-ui';

Vue.component(Button.name,Button)
Vue.component(Checkbox.name,Checkbox)

// import store from './store'


Vue.config.productionTip = false

new Vue({
    render: h => h(App),
    el:"#app",
    component:{App},
    store ,// 把 store 对象提供给 “store” 选项，这可以把 store 的实例注入所有的子组件
})
