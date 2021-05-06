<template>
    <el-container class="container">
        <el-aside class="aside">
            <AsideNav />
        </el-aside>
        <el-container>
            <el-header class="header">
                <Header />
            </el-header>
            <div class="tags-box">
                <RouteTag />
            </div>
            <el-main class="pages-view">
                <router-view />
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
import AsideNav from './components/aside-nav'
import Header from './components/header'
import RouteTag from './components/route-tag'
export default {
    name: 'Layout',
    components: {
        AsideNav,
        Header,
        RouteTag
    }
}
</script>

<style lang="scss" scoped>
.el-header,
.el-footer {
    color: #333;
    text-align: center;
    line-height: 60px;
}

.el-aside {
    //   background-color: #d3dce6;
    color: #333;
    text-align: center;
    line-height: 200px;
}

.el-main {
    color: #333;
    text-align: center;
    line-height: 160px;
}

.container {
    height: 100vh;
    background-color: #ffffff;
}
.pages-view{
    background-color: #efefef;
    line-height: unset;
    // padding-top: 10px;
}
::v-deep .aside {
    width: auto !important;
    height: 100vh;
    border-right: 1px solid #efefef;
}
.header {
    border-bottom: 1px solid #efefef;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding-right: 40px;
}
.tags-box {
    padding: 10px;
    border-bottom: 1px solid #efefef;
}
</style>
