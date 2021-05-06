<template>
    <el-tabs class="message-page" v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="危险消息" name="danger"> 
            <ul class="message-box">
                <li class="message-item" v-for="(item,index) in messageData.danger" :key="item.id">
                    <p class="describe">
                        {{ index + 1 }}. {{ item.describe }}
                    </p>
                    <p class="addresser">
                        {{ item.addresser }}
                    </p>
                    <span>
                        {{ item.time }}
                    </span>
                </li>
            </ul>
        </el-tab-pane>
        <el-tab-pane label="紧急消息" name="urgency">  
            <el-empty description="暂无数据" />
        </el-tab-pane>
        <el-tab-pane label="一般消息" name="ordinary">
            <el-empty description="暂无数据" />
        </el-tab-pane>
    </el-tabs>
</template>

<script>
export default {
    data() {
        return {
            activeName: 'danger',
            messageData: {
                danger: [
                    { 
                        id: '001',
                        describe: '该系统将于今晚凌晨 3:00 到进行升级维护，预计凌晨 4:00 升级完成',
                        time: '2021-04-20 PM 9:00',
                        addresser: '摸鱼老严'
                    },
                    { 
                        id: '002',
                        describe: '周五下午 3:00 公司研发部进行学习分享会',
                        time: '2021-04-09 PM 8:00',
                        addresser: '摸鱼老严'
                    }
                ]
            }
        }
    },
    methods: {
        handleClick(tab, event) {
            console.log(tab, event)
        }
    }
}
</script>

<style lang="scss" scoped>
.message-page{
    background-color: #fff;
    width: 100%;
    box-sizing: border-box;
    padding: 20px;

    .message-box {
        text-align: left;
        min-height: 294.17px;
        padding: 0;
        margin: 0;
        .message-item {
            border-bottom: 1px solid #efefef;
            list-style:outside;
            color: #5b8ff9;
            list-style: none;
            display: flex;
            cursor: pointer;
            align-items: center;
            .describe{
                height: 60px;
                justify-content: left;
                line-height: 60px;
                font-size: 14px;
                margin: 0;
                flex: 1;
            }
            span{
                height: 60px;
                line-height: 60px;
                justify-content: flex-end;
                font-size: 14px;
                padding-right: 10px;
                color: #666;
            }
            .addresser {
                padding-right: 20px;
                font-size: 14px;
                color: #666;
            }
        }
    }
}

::v-deep .el-tabs__header{
    margin: 0 !important;
}
</style>