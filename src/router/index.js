import Vue from 'vue'
import VueRouter from 'vue-router'
//引入路由组件
import Order from '../pages/Order/Order'
import Home from '../pages/Home/Home'
import Profile from '../pages/Profile/Profile'
import Search from '../pages/Search/Search'
Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        {
            path:'/home',
            component:Home
        },
        {
            path:'/order',
            component:Order
        },
        {
            path:'/profile',
            component:Profile
        },
        {
            path:'/search',
            component:Search
        },
        {
            path:'/',
            redirect:'/home'
        },
    ]
})
