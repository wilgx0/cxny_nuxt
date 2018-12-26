<template>
    <div class='foot'>
        <div class='top'></div>
        <div class='middle'>
            <div>
                <img src="~/static/images/qrc.png" alt="">
            </div>
            <div>
                <h3>成雄农业</h3>
                <p>曲靖市成雄农产品有限公司</p>
                <p>地址：沾益县花山镇松林街道办事处</p>
                <p>电话：18959624598杨顺源</p>
            </div>
        </div>
        <div class='bottom'>COPY@RIGHT : 滇ICP备54215号</div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="less" scoped>
    .foot{
        color: #ffffff;
        .top{
            height: 25px;
            background-color: #22ac38;
        }
        .middle{
            height: 179px;
            background-color: #0d601a;
            display:flex;
            justify-content:space-between;
            align-items:center;
            padding: 0 230px;
        }
        .bottom{
            height: 40px;   
            background-color: #1b1b1b;
            text-align: center;
            line-height: 40px;
        }

    }
</style>

