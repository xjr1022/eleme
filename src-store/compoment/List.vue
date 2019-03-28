<template>
    <div class="list-container">
        <Item v-for="(todo,index) in this.$store.state.todos" :key="index" :todo="todo" :index="index" > </Item>
    </div>

</template>

<script>
    import Item from './Item'
    export default {
        name: "List",
        components:{
            Item
        },

    }
</script>

<style scoped>
.list-container {
    padding-bottom: 20px;
    padding-top: 20px;
}
</style>
