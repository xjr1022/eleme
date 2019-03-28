<template>
  <div id="app">

    <router-link to="/about">Go to about</router-link>

    <router-link to="/home">Go to home</router-link>
    <router-view></router-view>

  </div>
</template>

<script>


export default {
  name: 'app',
  components: {

  }
}
</script>

<style>

</style>
