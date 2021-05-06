<template>
    <ECharts class="charts-box" :ref="chartsData.id"  :option="chartsData" />
</template>

<script>
import * as echarts from 'echarts'
import { h } from 'vue'
import { createComponent } from 'echarts-for-vue'

export default {
    components: {
        ECharts: createComponent({ echarts, h }) // 作为组件使用
    },
    props: {
        chartsData: {
            type: Object,
            required: true
        }
    },
    methods: {
        doSomething() {
            this.$refs.chart.inst.getWidth() // 调用 ECharts 实例的方法
        }
    }
}
</script>

<style lang="scss" scoped>
.charts-box{
    height: 300px;
    margin: 0 !important;
    border-radius: 6px 0 0 6px;
    overflow: hidden;
    background-color: #ffffff;
}
</style>