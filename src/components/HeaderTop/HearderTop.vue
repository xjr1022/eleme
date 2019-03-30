<template>
<header class="header">

    <span class="left">
        <slot name="left"></slot>
    </span>

    <span class="header-title">
        {{title}}
    </span>

    <span class="right">
        <slot name="right"></slot>
    </span>

</header>
</template>

<script>
    export default {
        name: "HeaderTop",
        props:{
            title:String
        }
    }
</script>

<style lang="stylus" scoped>
.header
    background-color #FED06A
    display  flex
    justify-content space-between
    flex-wrap nowrap
    z-index: 100
    left 0
    top 0
    width: 100%
    height 45px
    .header-title
        font-size 1.2em
        color #3e3e3e
        text-align center
        margin-top 0.7em
        width 100px
    .right
        text-align right
        padding-right 10px
        margin-top 0.8em
        width 100px
    .left
        width 100px



</style>
