<template>
    <div  >
        <router-view></router-view>
        <Footer></Footer>
    </div>
</template>

<script>
    import Footer from './components/Footer/Footer'
    export default {
        name: "App",
        components:{
        Footer
        }

    }
</script>

<style lang="stylus" >

</style>
