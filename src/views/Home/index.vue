<template>
    <div class="home-head">
        <div class="home-card">
            <h2 class="totality">
                <count-to :startVal='0' :endVal='473211' :duration=1000 />
            </h2>
            <p class="deadline"> <span> today:</span> 2021-04-18</p>
            <p class="proportion"> +7.6% ( <count-to :startVal='0' :endVal='35964' :duration=1000 /> ) </p>
            <div class="progress">
                <el-progress :percentage="progressData" type="circle" color="#5ad8a6"/>
                <el-progress :percentage="progressData2" type="circle" color="#f6bd16" />
            </div>
        </div>
        <Echarts class="home-charts" :charts-data="download"/>
        <div class="home-info">
            <img src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F3f8e0faf5c8c5aa3865a7218cd4f6a2a9eac23e723a3a-26lRCL_fw658&refer=http%3A%2F%2Fhbimg.b0.upaiyun.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1621258085&t=4848b3283b36e23de33cf239bfb8093b" alt="">
            <p class="title">英雄联盟 </p>
            <p class="title subhead" >beta v1.0 </p>
            <div class="home-info-bottom">
                <el-divider />
                 <div class="statistics">
                     <p><count-to :startVal='0' :endVal='688' :duration=1000></count-to></p> 
                     <p><count-to :startVal='0' :endVal='244' :duration=1000></count-to></p> 
                     <p><count-to :startVal='0' :endVal='796' :duration=1000></count-to></p> 
                 </div>
                 <div class="statistics-title statistics">
                     <p>user</p> 
                     <p>on line</p> 
                     <p>download</p> 
                 </div>
                <el-divider />
                <el-button> <i class="el-icon-download"></i> Download </el-button>
            </div>
        </div>
    </div>
    <div class="home-head">
        <Echarts class="charts-distribution" :charts-data="distribution"/>
        <div class="table-data">
            <Table/>
        </div>
    </div>
</template>

<script>
import Echarts from './components/echarts'
import { CountTo } from 'vue3-count-to';
import { download, distribution } from '../../data/charts-data'
import Table from './components/table'

export default {
    name: 'Home',
    components: {
        Echarts,
        CountTo,
        Table
    },
    data() {
        return {
            counterData: 28770,
            progressData: 0,
            progressData2: 0,
            download,
            distribution
        }
    },
    mounted() {
        this.progressData = 88
        this.progressData2 = 79
    }
}
</script>

<style lang="scss" scoped>
.charts-distribution{
    flex: 6;
    margin-right: 10px !important;
    padding: none !important;
}
.table-data{
    flex: 18;
    background-color: #ffffff;
    overflow: auto;
}
.home-head{
    height: 350px;
    display: flex;
    margin-bottom: 20px;
    .home-card{
        height: 350px;
        background-color: #8db0fc;
        flex: 6;
        margin-right: 10px;
        border-radius: 6px;
        padding: 30px;
        padding-right: 10px;
        box-sizing: border-box;
        text-align: left;
        .progress{
            display: flex;
            margin-top: 40px;
        }
        .deadline{
            font-size: 14px;
            color: #ffffff;
            font-weight: 600;
            span{
                color: #efefef;
            }
        }
        .proportion {
            font-size: 18px;
            color: #ffffff;
            font-weight: 600;
            margin: 10px 0;
        }
    }
    .home-charts{
        flex: 12;
    }
    .home-info{
        flex: 6;
        background-color: #ffffff;
        border-radius: 0 6px 6px 0;
        border-left: 1px solid #efefef;
        img{
            width: 100%;
            padding: 10px 40px 0 40px;
            box-sizing: border-box;
            display: block;
            height: 120px;
        }
        .title{
            padding: 0;
            margin: 0;
            font-size: 20px;
            line-height: 24px;
        }
        .subhead{
            font-size:12px;
            margin-bottom: 10px;
        }
        .home-info-bottom{
            padding: 10px;
            box-sizing: border-box;
            .statistics{
                display: flex;
                text-align: center;
                margin-top: 10px;
                p{
                    flex: 1;
                    text-align: center;
                    line-height: 26px;
                    font-size: 22px;
                }
            }
            .statistics-title{
                margin-bottom: 10px;
                margin-top: 0;
                p{
                    line-height: 22px;
                    font-size: 12px;
                    color: #909399;
                }
            }
        }
    }
    .totality{
        color: #ffffff;
        line-height: 50px;
        font-size: 30px;
    }
}


::v-deep .el-button{
    width: 100%;
    margin-top: 20px;
}
p,div,h2{
    padding: 0;
    margin: 0;
    line-height: 20px;
}
::v-deep .el-progress , .el-progress--line{
    flex: 1;
}
::v-deep .el-progress__text > span{
    color: #fff;
}
</style>