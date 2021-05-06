<template>
    <p class="action-box">
        <i class="el-icon-bell"></i>
        <i  @click="screen" class="el-icon-rank"></i>
    </p>
    <el-dropdown>
        <el-avatar> user </el-avatar>
        <template #dropdown>
            <el-dropdown-menu>
                <el-dropdown-item @click="getLogout">退出登录</el-dropdown-item>
                <el-dropdown-item>个人信息</el-dropdown-item>
            </el-dropdown-menu>
        </template>
    </el-dropdown>
</template>

<script>
import { mapState } from 'vuex'
export default {
    data(){
        return {
            fullscreen: false
        }
    },
    computed: {
        ...mapState(['UserRole'])
    },
    methods:{
        screen () {
            let element = document.documentElement;
            if (this.fullscreen) {
                if (document.exitFullscreen) {
                    document.exitFullscreen();
                } else if (document.webkitCancelFullScreen) {
                    document.webkitCancelFullScreen();
                } else if (document.mozCancelFullScreen) {
                    document.mozCancelFullScreen();
                } else if (document.msExitFullscreen) {
                    document.msExitFullscreen();
                }
            } else {
                if (element.requestFullscreen) {
                    element.requestFullscreen();
                } else if (element.webkitRequestFullScreen) {
                    element.webkitRequestFullScreen();
                } else if (element.mozRequestFullScreen) {
                    element.mozRequestFullScreen();
                } else if (element.msRequestFullscreen) {
                    element.msRequestFullscreen();
                }
            }
            this.fullscreen = !this.fullscreen;
        },
        getLogout(){
            this.$store.commit('changeUserRole', false)
            this.$router.push('/login')
        }
    }
}
</script>

<style lang="scss" scoped>
.action-box{
  display: flex;
  align-items: center;
  margin-right: 20px;
  i{
    font-size: 26px;
    margin-left: 20px;
    cursor: pointer;
  }
}
</style>