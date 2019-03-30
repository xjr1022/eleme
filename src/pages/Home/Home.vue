<template>
    <div>
            <!--顶栏-->
            <HeaderTop title="首页">
                <span slot="left" class="header-search">
                                   <i class="iconfont icon-sousuo" ></i>
                </span>
                <span slot="right" class="header-login">
                        登陆
                </span>
            </HeaderTop>
        <!--导航-->
        <nav class="home-nav">
            <div class="swiper-container">
            <swiper :options="swiperOption" ref="mySwiper" >
                <!-- slides -->
                <swiper-slide class="swiper1">

                    <div class="swiper-item">
                        <div>
                            <img src="./images/nav/1.jpg" alt="">
                        </div>
                            <span>特价早餐</span>
                    </div>


                </swiper-slide>
                <swiper-slide class="swiper2">
                    <div class="swiper-item">
                        <div>
                            <img src="./images/nav/1.jpg" alt="">
                        </div>
                        <span>特价早餐</span>
                    </div>
                    <div class="swiper-item">
                        <div>
                            <img src="./images/nav/1.jpg" alt="">
                        </div>
                        <span>特价早餐</span>
                    </div>
                    <div class="swiper-item">
                        <div>
                            <img src="./images/nav/1.jpg" alt="">
                        </div>
                        <span>特价早餐</span>
                    </div>
                </swiper-slide>

                <!-- Optional controls -->
                <div class="swiper-pagination"  slot="pagination"></div>
            </swiper>
            </div>
        </nav>
    </div>
</template>

<script>
    /*
*修改人:徐嘉锐
*创建时间: 2019/3/27 20:58
*/
    import HeaderTop from '../../components/HeaderTop/HearderTop'
    import 'swiper/dist/css/swiper.css'
    import {swiper,swiperSlide} from 'vue-awesome-swiper'

    export default {
        name: "Home",
        components:{
            HeaderTop,
            swiper,
            swiperSlide
        },
        data() {
            return {
                swiperOption: {
                    height:200,
                    pagination: {
                        el: '.swiper-pagination',
                        bulletActiveClass: 'pagination-bullet-active',
                    },
                }
            }
        },
        computed: {

        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" >
.header-search
    position absolute
    padding-top 0.6em
    .icon-sousuo
        padding-left 10px
        font-size 1.6em
        color #3e3e3e

.header-login
    width 100%
    text-align center
    color #3e3e3e
    font-size 1.2em

nav
    width 100%
    height 200px
    background-color white
    .swiper-container
        height 100%


.pagination-bullet-active
    opacity 1
    background-color rgb(254,208,106)
.swiper1,.swiper2
    display flex
    flex-wrap wrap
    .swiper-item
        width 25%
        height 50%
        text-align center
        color #666666
        img
            width 50px
            height 50px
        span
            font-size 0.7em
</style>
