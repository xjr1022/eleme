<template>
    <div class="container">
        <div class="content">

            <div class="txt">
                <el-checkbox v-model="isCheck" class="check"></el-checkbox>
            <span>
                 <span>已经完成</span>/全部 {{this.todosLength}}
            </span>
            </div>
        <el-button type="danger" class="dranger-btn">危险按钮</el-button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Footer",
        data() {
            return{
                isCheck:false
            }
        },
        computed:{
            todosLength(){
                return this.$store.state.todos.length
            },
        },
        mounted:function(){
            // console.log("mounter")
// console.log(this.$store.state.todos)
            let test = true
            this.$store.state.todos.forEach(item=>{
                if (item.complete===false){

                   test = false
                }
            })
            if (test){
                this.isCheck = test
            }
        },
        watch:{
            isCheck:function () {
                // console.log("watch")
                this.$store.commit('selectAll',this.isCheck)
            }
        }
    }
</script>

<style scoped>
    .dranger-btn {
        position: absolute;
        right: 0;
        top: 10%;
    }
    .check {
        vertical-align: center;
    }
    .container {
        padding: 0;
        width: 100%;
        height: 50px;
        position: relative;
    }
    .content {
       vertical-align: center;
    }
    .txt {
        position: absolute;
        top: 30%;
    }
</style>
