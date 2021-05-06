<template>
    <router-view/>
</template>

<script>
    export default {
        name: 'App'
    }
</script>

<style lang="scss">
    body{
        margin: 0;
        padding: 0;
    }
    #nprogress{
        position: absolute;
        top: 0;
        width: 100%;
        height: 2px;
        background: #5b8ff9;
    }
</style>