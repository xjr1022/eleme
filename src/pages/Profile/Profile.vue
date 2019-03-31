<template>
    <div class="profile">
<!--  头部-->
    <HeaderTop title="我的">
    </HeaderTop>
<!--        个人信息-->
        <router-link to="/login">
        <section class="profile-link">
            <div class="my-profile">
                    <i class="iconfont icon-person"></i>
            </div>
            <div class="my-info">
                <p class="my-name">Bat Man</p>
                <p class="my-detail">个人信息</p>
            </div>
        </section>
        </router-link>
<!--个人模块-->
        <section class="my-section">
            <div class="section-item">
                <div>
                    <svg class="item-icon" aria-hidden="true">
                        <use xlink:href="#icon-shoucang"></use>
                    </svg>
                </div>
                    <span class="item-name">我的收藏</span>
            </div>
            <div class="section-item">
                <div>
                    <svg class="item-icon" aria-hidden="true">
                        <use xlink:href="#icon-zuji"></use>
                    </svg>
                </div>
                <span class="item-name">我的足迹</span>
            </div>
            <div class="section-item">
                <div>
                    <svg class="item-icon" aria-hidden="true">
                        <use xlink:href="#icon-pingjia"></use>
                    </svg>
                </div>
                <span class="item-name">我的评价</span>
            </div>
            <div class="section-item">
                <div>
                    <svg class="item-icon" aria-hidden="true">
                        <use xlink:href="#icon-daxie"></use>
                    </svg>
                </div>
                <span class="item-name">答谢记录</span>
            </div>
            <div class="section-item">
                <div>
                    <svg class="item-icon" aria-hidden="true">
                        <use xlink:href="#icon-dizhi"></use>
                    </svg>
                </div>
                <span class="item-name">我的地址</span>
            </div>
        </section>

<!--        我的-->
        <section class="my-list">
            <MyList title="我的资产" :Listarr="listArr"></MyList>
            <MyList title="我的服务"></MyList>
            <MyList title="更多推荐"></MyList>
        </section>
    </div>
</template>

<script>
    /*
*修改人:徐嘉锐
*创建时间: 2019/3/27 20:59
*/
    import HeaderTop from '../../components/HeaderTop/HearderTop'
    import MyList from '../../components/MyList/MyList'
    export default {
        name: "Profile",
        data(){
          return {
              listArr:[
                  {
                      icon:"icon-packet",
                      name:'代金券',
                      detail:'7个未使用'
                  },
                  {
                      icon:"icon-packet",
                      name:'代金券',
                      detail:'7个未使用'
                  },
                  {
                      icon:"icon-packet",
                      name:'代金券',
                      detail:'7个未使用'
                  },
                  {
                      icon:"icon-packet",
                      name:'代金券',
                      detail:'7个未使用'
                  },
                  {
                      icon:"icon-packet",
                      name:'代金券',
                      detail:'7个未使用'
                  },
              ]
          }
        },
        components:{
            HeaderTop,
            MyList
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.profile
    overflow hidden
    margin-bottom 50px
    .profile-link
        width 100%
        height 70px
        background-color #FED06A
        display flex
        flex-wrap nowrap

        .my-profile
            height: 60px
            width: 60px
            border-radius 50%
            overflow hidden
            margin-left  20px
            background-color #FED06A
            .icon-person
                background-color #e4e4e4
                font-size 60px
                color grey

        .my-info
            width 150px
            height 60px
            margin-left 20px
            color #3e3e3e
            .my-name
                margin-top 10px
                font-size 1.1em
            .my-detail
                margin-top 7px
                font-size 0.7em

.my-section
    padding-top  15px
    display flex
    flex-wrap wrap
    width 100%
    height 140px
    background-color white
    text-align center
    .section-item
        width 25%
        .item-name
            font-size 0.8em
            color #3e3e3e
        .item-icon
            width: 1em;
            height: 1em;
            fill: currentColor;
            overflow: hidden;
            font-size 2em

</style>
