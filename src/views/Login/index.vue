<template>
    <div class="login-content">
        <div class="login_box">
            <div class="login_img">
            </div>
            <div class="user_form">
                <h2 class="title">登录</h2>
                <el-form class="user_from_content">
                     <el-form-item >
                        <el-input type="text" v-model="userInfo.userName" placeholder="用户名" autocomplete="off" ></el-input>
                     </el-form-item>
                     <el-form-item >
                        <el-input type="password" v-model="userInfo.password" placeholder="密码" autocomplete="off" ></el-input>
                     </el-form-item>
                    <p class="reset">忘记密码？<el-link class="reset_link" type="primary">点我重新认证</el-link></p>
                    <el-button @click="getLogin" class="login_btn" size="small" type="primary"> 登录 </el-button>
                    <p class="else-login">
                        其他登录方式
                        <img src="../../assets/微信.png" >
                        <img src="../../assets/支付宝.png" >
                        <img src="../../assets/github.png" >
                    </p>
                </el-form>
            </div>
        </div>
    </div>
</template>

<script>
    import { ElNotification } from 'element-plus';
    import userData from '../../data/user'
    import adminData from '../../data/admin'
    export default {
        name: 'Login',
        data() {
            return {
                userInfo: {
                    userName: 'admin',
                    password: '123456'
                }
            }
        },
        created(){
            this.$store.commit('changeUserRole',false)
            sessionStorage.clear()
            this.$store.commit('deleteRoutesHistory')
        },
        methods:{
            getLogin(){
                this.$store.commit('changeUserRole',this.userInfo.userName)
                // 模拟请求回来的数据 区分 管理员和用户
                this.$store.commit('addRoutes', this.userInfo.userName === 'admin' ? adminData : userData)
                this.$router.push('/')
                ElNotification.success({
                    title: '登录成功',
                    message: `${this.userInfo.userName}欢迎回来!`,
                    showClose: true,
                    duration: 2000
                });
            }
        }
    }
</script>

<style lang="scss" scoped>
.login-content{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #FFFFFF;
    background-image: url(https://gw.alipayobjects.com/zos/rmsportal/TVYTbAXWheQpRcWDaDMu.svg);
    background-repeat: no-repeat;
    background-size: 100% 100%;
    .login_box{
        display: flex;
        border-radius: 6px;
        height: 350px;
        overflow: hidden;
        width: 650px;
        box-shadow: 0 2px 12px 0 #efefef;
        .user_form{
            // border: 1px solid #efefef;
            border-left: unset;
            flex: 1;
            background-color: #ffffff;
            box-sizing: border-box;
            border-radius: 0 6px 6px 0;
            .title{
                color: #666666;
                font-weight: unset;
                text-align: center;
            }
            .user_from_content{
                margin: 20px;
            }
            .reset{
                margin: 0;
                font-size: 12px;
                color: #cccccc;
                text-align: right;
                display: flex;
                justify-content: flex-end;
                align-items: center;
                padding-bottom: 15px;
                .reset_link{
                    font-size: 12px;
                    &:focus{
                        border-bottom: unset;
                    }
                }
            }
            .else-login{
                font-size: 14px;
                display: flex;
                align-items: center;
                color: #777777;
                margin-top: 20px;
                img{
                    width: 20px;
                    height: 20px;
                    margin-left: 6px;
                    cursor: pointer;
                }
            }
        }
        .login_img{
            flex: 1;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: #5b8ff9;
        }
    }
}

::v-deep .el-button{
    width: 100%;
}


::v-deep .el-input__inner{
    border: unset;
    background: unset;
    border-bottom: 1px solid #DCDFE6;
    border-radius: unset;
    &:focus{
        border-bottom: 1px solid #5b8ff9;
    }
}
</style>