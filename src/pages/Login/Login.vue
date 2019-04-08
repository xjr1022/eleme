<template>
    <div class="login">

        <div class="login-header">
            <div class="login-back" @click="goBack">
                <i class="iconfont icon-jiantou"></i>
            </div>
        </div>

        <div class="login-title">
            <span>美团外卖</span>
        </div>

        <section class="user-login">
            <div class="login-select">
                <div class="select-left" :class="[loginMethod ? switchCss : '']" @click="loginSwitch">
                  短信登录
                </div>
                <div class="select-right" :class="[!loginMethod ? switchCss : '']" @click="loginSwitch">
               密码登录
                </div>
            </div>
            <div v-if="loginMethod" class="login-div" >
                <input class="login-input" type="text" v-model="phone" placeholder="手机号" />
                <button class="login-mes-btn" :disabled="!isRight" :class="{right_num:isRight}" @click="btnClick">
                    {{ time>0?`在${this.time}秒重试`:'获取验证码'}}
                </button>
                <input class="login-input mes-num" type="text"  placeholder="验证码" />
            </div>

            <div v-else class="login-div" >
                <input class="login-input" type="text"  placeholder="手机号" />
                <input class="login-input mes-num" type="text"  placeholder="密码" />
            </div>

            <div class="login-btn-div">
                <span class="login-btn" >登录</span>
            </div>

        </section>


    </div>
</template>

<script>
    /*
*修改人:徐嘉锐
*创建时间: 2019-03-30 11:11
*/

    export default {
        name: "Login",
        data(){
          return {
              isShow:false,
              btnText:"获取验证码",
              loginMethod:true,
              switchCss:'login-switch',
              phone:'',
              time:0
          }
        },
        computed:{
            isRight(){
             return /^1\d{10}$/.test(this.phone)
            },
        },
        methods:{
            btnClick(){
                this.time = 60;
                this.phone+=' ';
                let set = setInterval(()=>{
                    this.time--;
                    if (this.time<=0){
                        clearInterval(set);
                        this.phone=this.phone.trim()
                    }
                }, 1000);

            },

            loginSwitch(){
                this.loginMethod = !this.loginMethod
            },

            goBack(){
                this.$router.go(-1)
            }

        },
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.login
    background-color white
    width 100%
    height 100%
    .login-header
        width 100%
        height 50px
        .login-back
            padding-top  10px
            .iconfont
                font-size 1.5em
                color gray
                padding-left  10px
    .login-title
        margin-top 30px
        display flex
        justify-content center
        width 100%
        span
            text-align center
            font-size 2.6em
            font-weight bold
            color #FED06A
    .user-login
        .login-select
            display flex
            justify-content center
            padding-top  40px
            font-size 14px
            .select-left
                margin-right 10%

            .login-switch
                border-bottom solid 2px #FED06A
                font-weight 700
                color #FED06A
                padding-bottom 10px

        .login-div
            padding-top 10px
            text-align center
            position relative
            font-size 14px
            .login-input
                width 80%
                height 48px
                padding-left 10px
                border solid 1px #ddd
                border-radius 4px
                outline 0
             .mes-num
                margin-top 15px
             .login-mes-btn
                 width: 90px
                 height: 30px
                 font-size 1em
                 position absolute
                 top 17%
                 right 10%
                 color #ccc
                 outline none
                 border 0
                 background-color transparent
                 &.right_num
                    color black

            .login-input:focus
                border solid 1px #FED06A
        .login-btn-div
            margin-top 30px
            width: 100%
            height 80px
            display flex
            justify-content center
            .login-btn
                text-align center
                vertical-align center
                display inline-block
                background-color  #FED06A
                width 83.5%
                height 40px
                border-radius 4px
                color white
                font-size 16px
                line-height 40px
</style>
