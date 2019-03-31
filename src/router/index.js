import Vue from 'vue'
import VueRouter from 'vue-router'
//引入路由组件
import Order from '../pages/Order/Order'
import Home from '../pages/Home/Home'
import Profile from '../pages/Profile/Profile'
import Search from '../pages/Search/Search'
import Login from '../pages/Login/Login'
Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        {
            path:'/home',
            component:Home,
            meta:{
                FooterBar:true
            }
        },
        {
            path:'/order',
            component:Order,
            meta:{
                FooterBar:true
            }
        },
        {
            path:'/profile',
            component:Profile,
            meta:{
                    FooterBar:true
            }
        },
        {
            path:'/search',
            component:Search,
            meta:{
                FooterBar:true
            }
        },
        {
            path:'/',
            redirect:'/home'
        },
        {
            path:'/login',
            component:Login
        },
    ]
})
