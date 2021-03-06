import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
// import store from './store/index'
import {Button} from 'mand-mobile';
import { ScrollView, ScrollViewMore } from 'mand-mobile'
Vue.component(ScrollViewMore.name, ScrollViewMore)
Vue.component(ScrollView.name, ScrollView)
Vue.component(Button.name,Button)


// import store from './store'


Vue.config.productionTip = false

new Vue({
    render: h => h(App),
    el:"#app",
    component:{App},
    router
    // store ,// 把 store 对象提供给 “store” 选项，这可以把 store 的实例注入所有的子组件
})
