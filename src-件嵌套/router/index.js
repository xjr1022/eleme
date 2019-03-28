import Vue from "vue"
import VueRouter from "vue-router"
import About from "../components/About"
import Home from "../components/Home"
import News from "../components/News"
import Message from "../components/Message"
import MessageDetail from "../components/MessageDetail"
Vue.use(VueRouter);

export default new VueRouter({
    routes:[
        {
            path:"/about",
            component:About
        },
        {
            path:"/home",
            component:Home,
            children:[
                {
                    path:"news",
                    component:News,
                },
                {
                    path:"message",
                    component:Message,
                    children:[
                        {
                            path:"/home/message/detail/",
                            // name:'detail',
                            component:MessageDetail,
                            props:true
                        }
                    ]
                },
            ]
        },
        {
            path:'/',
            redirect:'/home'
        }


    ]
})
