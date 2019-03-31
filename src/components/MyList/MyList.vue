<template>
    <div class="list-contain">
    <div class="list-name">
        <span >{{title}}</span>
    </div>
     <div class="list-item-contain">

         <div class="list-item" v-for="arr in Listarr">
             <div class="item-icon">
                 <i class="iconfont " :class="[arr.icon]"></i>
             </div>
             <p class="item-name">{{arr.name}}</p>
             <span class="item-detail">{{arr.detail}}</span>
         </div>




     </div>
    </div>
</template>

<script>
    /*
*修改人:徐嘉锐
*创建时间: 2019/3/30 23:07
*/

    export default {
        name: "MyList",
        data(){
        return  {
                isActive:true
            }
        },

        props:{
            title:String,
            Listarr:Array
        },
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.list-contain
    width 100%

    background-color white
    margin-top 10px
    padding-bottom 20px
    .list-name
        font-size 0.8em
        width 95%
        height 35px
        border-bottom  1px solid #dddddd
        margin-left 10px
        margin-right 10px
        span
            display inline-block
            margin-top 10px
            color #8c8c8c
    .list-item-contain
        display flex
        flex-wrap wrap
        .list-item
            margin-top 15px
            width 25%
            text-align center
            .iconfont
                font-size 1.5em
                color #5f5f5f
            .item-name
                margin-top 5px
                font-size 0.8em
            .item-detail
                font-size 0.6em
                color #8c8c8c
</style>
