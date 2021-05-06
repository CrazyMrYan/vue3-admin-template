<script>
import { h } from 'vue'

export default {
    props: {
        valData: {
            type: Number,
            required: true
        },
        tag: {
            type: String,
            default: 'p'
        },
        class: [String, Array],
        time: {
            type: Number,
            default: 5000
        },
        initNum: {
            type: Number,
            default: 0
        }
    },
    render() {
        return h(
            this.tag,
            {
                class: this.class
            },
            this.realData
        )
    },
    data(){
        return {
            realData: 0
        }
    },
    methods: {
        numFun(startNum,maxNum) {  
            var that = this  
            let numText = startNum;  
            let golb; // 为了清除requestAnimationFrame  
            function numSlideFun(){ // 数字动画  
                numText += 9999; // 速度的计算可以为小数 。数字越大，滚动越快  
                if(numText >= maxNum){  
                    numText = maxNum;  
                    cancelAnimationFrame(golb);  
                }else {  
                    golb = requestAnimationFrame(numSlideFun);  
                }  
                that.amount=numText  
                // console.log(numText)  
            }  
            numSlideFun(); // 调用数字动画  
        }  
    },
    mounted() {
        this.numFun(this.initNum,this.valData)
    }
}
</script>

<style lang="scss" scoped></style>
