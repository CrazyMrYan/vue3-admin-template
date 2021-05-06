<template>
    <div class="logo-box">
        <i @click="changeSidebarSwitch()" :class="[collapse() ? 'el-icon-s-unfold' : 'el-icon-s-fold']"></i>
    </div>
    <el-menu
        @select="activePage"
        class="aside-menu"
        unique-opened
        @open="openNav"
        :collapse="collapse()"
        :default-active="onRoutes()"
    >
        <template v-for="item in routes">
            <template v-if="item.children">
                <el-submenu :index="item.path" :key="item.path">
                    <template #title>
                        <i :class="item.meta.icon"></i>
                        <span>{{ item.meta.title }}</span>
                    </template>
                    <template v-for="childItem in item.children">
                        <el-submenu v-if="childItem.children" :index="childItem.path" :key="childItem.path">
                            <template #title>{{ childItem.meta.title }}</template>
                            <el-menu-item v-for="(threeItem, i) in childItem.children" :key="i" :index="threeItem.path">
                                <i :class="childItem.meta.icon"></i>
                                {{ childItem.meta.title }}</el-menu-item
                            >
                        </el-submenu>
                        <el-menu-item v-else :index="childItem.path" :key="childItem.path">
                            <i :class="childItem.meta.icon"></i>
                            {{ childItem.meta.title }}</el-menu-item
                        >
                    </template>
                </el-submenu>
            </template>
            <template v-else-if="IdentifyRoute(item.path) || item.children">
                <el-menu-item :index="item.path" :key="item.path">
                    <i :class="item.meta.icon"></i>
                    <template #title>{{ item.meta.title }}</template>
                </el-menu-item>
            </template>
        </template>
    </el-menu>
</template>

<script>
import Logo from './logo'
import { mapState } from 'vuex'
export default {
    computed: {
        ...mapState(['routes'])
    },
    components: { Logo },
    methods: {
        openNav(path, indexPath) {
            this.$router.push(path)
        },
        onRoutes() {
            return this.$route.path.replace('/', '/')
        },
        collapse() {
            return this.$store.state.SidebarSwitch
        },
        changeSidebarSwitch() {
            this.$store.commit('changeSidebarSwitch', !this.collapse())
        },
        activePage(index, indexPath) {
            this.$router.push(indexPath.length > 2 ? ndexPath[1] : index)
        },
        IdentifyRoute(e) {
            return e === '/login' || e === '/404' ? false : true
        }
    }
}
</script>

<style lang="scss" scoped>
.aside-menu {
    text-align: left;
    li {
        width: 260px;
    }
}

::v-deep .el-menu,
.aside-menu {
    border-right: none !important;
}

.logo-box {
    // height: 100px;
    text-align: center;
    line-height: 60px;
    height: 60px;
    i {
        font-size: 24px;
        cursor: pointer;
    }
}

::v-deep .el-menu--collapse .el-menu-item, .el-menu--collapse li {
    padding: 0 !important;
    width: unset !important;
}
</style>
