const download = {
    id: 'download',
    title: {
        text: '近一周下载量',
        x:'center',
        padding: 20,
        textStyle: {
            color: '#303133',
            fontWeight: 'normal',
            fontSize: 20,
        }
    },
    color:['#5b8ff9'],
    tooltip: {
        trigger: 'axis',
        x: 'center',
        axisPointer: {
            type: 'cross',
            label: {
                backgroundColor: '#6a7985'
            }
        }
    },
    grid: {
        left: '3%',
        right: '3%',
        bottom: '6%',
        containLabel: true
    },
    xAxis: [
        {
            type: 'category',
            boundaryGap: false,
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
        }
    ],
    yAxis: [
        {
            type: 'value'
        }
    ],
    series: [
        {
            smooth: true,
            name: '英雄联盟',
            type: 'line',
            stack: '总量',
            areaStyle: {},
            data: [120, 132, 101, 134, 90, 230, 210]
        }
    ]
}

const distribution = {
    id: 'distribution',
    title: {
        text: '用户分布数据',
        x:'center',
        padding: 20,
        textStyle: {
            color: '#303133',
            fontWeight: 'normal',
            fontSize: 20,
        }
    },
    grid: {
        y: 'center',
        left: '3%',
        right: '3%',
        bottom: '0%',
        containLabel: true
    },
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    series: [
        {
            name: '用户分布',
            type: 'pie',
            radius: [20, 140],
            center: ['45%', '60%'],
            roseType: 'radius',
            itemStyle: {
                borderRadius: 5
            },
            label: {
                show: false
            },
            emphasis: {
                label: {
                    show: true
                }
            },
            data: [
                {value: 40, name: '北京'},
                {value: 33, name: '上海'},
                {value: 28, name: '广州'},
                {value: 22, name: '深圳'},
                {value: 20, name: '杭州'},
                {value: 15, name: '武汉'},
                {value: 12, name: '长沙'},
                {value: 10, name: '无锡'}
            ]
        },
    ]
};

export {
    download,
    distribution
}