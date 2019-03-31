<template>
<div>
        <div>Home</div>
        <div>用户id</div>
        <router-link to="/home/message">Message</router-link>

        <router-link to="/home/news">News</router-link>
    <keep-alive>
        <router-view></router-view>
    </keep-alive>
</div>
</template>

<script>
    export default {
        name: "Home"
    }
</script>

<style scoped>

</style>
