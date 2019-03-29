<template>
    <div>

            <HeaderTop title="首页">
                <span slot="left" class="header-search">
                                   <i class="iconfont icon-sousuo" ></i>
                </span>

            </HeaderTop>
    </div>
</template>

<script>
    /*
*修改人:徐嘉锐
*创建时间: 2019/3/27 20:58
*/
    import HeaderTop from '../../components/HeaderTop/HearderTop'
    export default {
        name: "Home",
        components:{
            HeaderTop
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.header-search

    .icon-sousuo
        padding-top 20px
        font-size 25px
        color #fff
</style>
