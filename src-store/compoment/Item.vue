<template>
    <li @mouseenter="handleEnter(true)" @mouseleave="handleEnter(false)" >
        <label>
            <el-checkbox v-model="todo.complete" class="check" ></el-checkbox>
            <span>{{todo.title}}</span>
        </label>
        <el-button type="danger" class="dranger-btn" v-show="isShow" size="mini" @click="deleteItem">删除</el-button>

    </li>
</template>

<script>
    export default {
        name: "Item",
        props:{
            todo:Object,
            index:Number
        },
        data(){
            return {
                isShow : false
            }
        },
        methods:{
            handleEnter(isTrue){
                isTrue?this.isShow = true:this.isShow = false;
            },
            deleteItem(){
                this.$store.commit('deleteItem',this.index)
            },

        },
        watch:{
            todo:{
               handler: function(){
                if (this.todo.complete===true){

                }

               },
                deep:true
            }
        }
    }
</script>

<style scoped>
    li {
        list-style: none;
        height: 36px;
        line-height: 36px;
        padding: 0 5px;
        border: 1px solid #ddd;
        margin-top: -1px;
    }
    li:hover {
        background-color: aliceblue;
    }
    li label {
        float: left;
        cursor: pointer;
    }

    li label li input {
        vertical-align: middle;
        margin-right: 6px;
        position: relative;
        top: -1px;
    }

    li button {
        float: right;
        /*display: none;*/
        margin-top: 3px;
    }

    li:before {
        content: initial;
    }


</style>
