<template>
    <div class="container">
        <div class="wrap">
        <Header></Header>
            <List></List>
            <Footer></Footer>
        </div>
    </div>
</template>

<script>
import List from './compoment/List'
import Header from './compoment/Header'

import Footer from './compoment/Footer'
    export default {
        name: "App",
        components:{
            Footer,
            Header,
            List
        }

    }
</script>

<style >
.container {
    width: 500px;
    margin:  0 auto;

}
.container .wrap {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
}
</style>
