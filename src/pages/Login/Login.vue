<template>
    <div class="login">

        <div class="login-header">
            <div class="login-back">
                <i class="iconfont icon-jiantou"></i>
            </div>
        </div>

        <div class="login-title">
            <span>美团外卖</span>
        </div>

        <section class="user-login">
            <div class="login-select">
                <div class="select-left">
                    <span>短信登录</span>
                </div>
                <div class="select-right">
                    <span>密码登录</span>
                </div>
            </div>
            <div class="message-login">
                <input class="login-phone" type="text"  placeholder="手机号" />
                <el-button plain :disabled="isShow" @click="btnClick">{{btnText}}</el-button>
            </div>
            <div class="pwd-login">

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
              btnText:"默认按钮"
          }
        },
        methods:{
            btnClick(){
                console.log(123);
                this.isShow = true;
                let time = 60;

                let set = setInterval(()=>{
                    time--;
                   this.btnText = `在${time}秒重试`;
                }, 1000);

                setTimeout(function(){
                    this.btnText='重新发送';
                    this.isShow = false;
                    clearInterval(set);
                }, 60000);

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
                border-bottom solid 2px #FED06A
                span
                    display inline-block
                    padding-bottom 10px
                    font-weight 700
                    color #FED06A
            .select-focus
                font-weight 700


        .message-login
            padding-top 10px
            text-align center
            height 50px
            .login-phone
                width 80%
                height 48px
                padding-left 10px
                border solid 1px #ddd
                border-radius 4px
                outline 0
             /*.el-button*/
             /*   color #FED06A*/
             /*   border solid 1px #FED06A*/
            .login-phone:focus
                border solid 1px #FED06A


</style>
