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
<!--上拉加载更多-->
        <div class="md-example-child md-example-child-scroll-view md-example-child-scroll-view-3">
            <md-scroll-view ref="scrollView" :scrolling-x="false" @endReached="$_onEndReached">
                <div v-for="i in list" :key="i" class="scroll-view-list">

                    <div class="scroll-view-item">
                        <img src="./images/m.jpeg" class="scroll-img" alt="">
                        <div class="scroll-section">
                            <div class="scroll-section-one">
                                <span class="one-left">麻辣香锅</span>
                            </div>
                            <div class="scroll-section-two">
                                <div class="scroll-start"></div>
                            </div>
                            <div class="scroll-section-three">

                            </div>
                            <div class="scroll-section-four"></div>
                        </div>
                        <div class="scroll-section-five"></div>
                    </div>
                </div>
                <md-scroll-view-more slot="more" :is-finished="isFinished">
                </md-scroll-view-more>
            </md-scroll-view>
        </div>

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
    import ScrollView from '../../components/ScrollView/ScrollView'
    export default {
        name: "Home",
        components:{
            HeaderTop,
            swiper,
            swiperSlide,
            ScrollView
        },
        data() {
            return {
                swiperOption: {
                    height:200,
                    pagination: {
                        el: '.swiper-pagination',
                        bulletActiveClass: 'pagination-bullet-active',
                    },
                },
                list: 10,
                isFinished: false,
            }
        },
        methods: {
            $_onEndReached() {
                if (this.isFinished) {
                    return
                }
                // async data
                setTimeout(() => {
                    this.list += 5
                    if (this.list >= 20) {
                        this.isFinished = true
                    }
                    this.$refs.scrollView.finishLoadMore()
                }, 1000)
            },
        },
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" >
    @import "../../../public/static/css/common.styl"
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
.md-example-child-scroll-view-3
    height 800px
    background #FFF
    margin-top 15px
    .scroll-view-item
        width: 100%
        height 80px
        padding 0 10px
        border-bottom .5px solid #efefef
        display flex

        .scroll-img
            flex-grow 1
            width: auto;
            height: auto;
            max-width: 75%;
            max-height: 75%;
            padding 10px 0
    .scroll-section
            flex-grow 5
            width 100%
            height 100%
            display flex
            flex-direction column
            .scroll-section-one
                .one-left
                    font-size 16px
            .scroll-section-two
                .scroll-start
                    width: 15px
                    height: 15px
                    bg-image('./images/stars/star24_on')
                    background-size 15px 15px
                    background-repeat no-repeat

</style>
