<template>
    <div>
        <ul>
            <li v-for="(message,index) in messages" :key="index">
                <!--方式1-->
                <!--<router-link :to="{path:'/home/message/detail/'+message.id}">{{message.title}}</router-link>-->
                <!--方式2-->
                <router-link :to="{ path:'/home/message/detail',params: { id: index}}" >{{message.title}}</router-link>

            </li>
        </ul>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: "Message",
        data(){
          return {
              messages:[]
          }
        },
        mounted() {
            setTimeout(()=>{
                 this.messages = [
                    {
                        id:1,
                        title:"message01"
                    },
                    {
                        id:2,
                        title:"message02"
                    },
                    {
                        id:3,
                        title:"message03"
                    },
                    {
                        id:4,
                        title:"message04"
                    },
                ]
            },1000)
        }
    }
</script>

<style scoped>

</style>
