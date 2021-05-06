<template>
    <el-tag
        v-for="tag in RoutesHistory"
        :key="tag.name"
        closable
        effect="dark"
        @click="getPushRoute(tag)"
        @close="handleClose(tag)"
        >
        {{tag.meta.title}}
    </el-tag>
</template>

<script>
    import { mapState } from 'vuex'
    export default {
        computed: {
            ...mapState(['RoutesHistory'])
        },
        methods: {
            getPushRoute(tag){
                this.$router.push(tag.path)
            },
            handleClose(tag){
                this.$store.commit('removeItemRoutesHistory',tag.path)
            }
        }
    }
</script>

<style lang="scss" scoped>
::v-deep .el-tag, .el-tag--dark{
    margin-right: 6px !important;
    cursor: pointer;
}
</style>