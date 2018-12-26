<template>
    <ul class='img-list'>
        <li v-for='(v,i) in list' :key='i'>
            <div class='left'>
                <nuxt-link :to="'/list/'+v.id">
                    <img src="~/static/images/nc.png" alt="">
                </nuxt-link>
            </div> 
            <div class='right'>
                <p>{{v.name}}</p>
                <p>{{v.seo_dec}}</p>
                <!-- <p>2018-12-10</p> -->
            </div>
        </li>
    </ul>
</template>
<script>
export default {
    data(){
        return {
            
        }
    },
    props:['list']
}
</script>

<style lang='less' scoped>
    .img-list{
        padding:0px;
        list-style: none;
        display:flex;
        flex-wrap:wrap;
        & > li{
            width:600px;
            display:flex;
            .left{
                width:228px;
                height:150px;
                img{
                    width:100%;
                    height:100%;
                }
            }
            .right{
                width:360px;
                display:flex;
                flex-direction: column;
                justify-content:space-between;
                padding-left:3px;    
                p{        
                  
                    margin:0;
                    text-indent: 10px;
                    &:nth-child(1){
                        overflow:hidden;
                        text-overflow:ellipsis;
                        white-space:nowrap;
                        font-weight:bold;
                        border-bottom: 1px dashed #999;
                    }
                    &:nth-child(2){
                        height:108px;
                        overflow:hidden;
                    }
                   
                    &:nth-child(3){
                        border-top: 1px dashed #999;
                        overflow:hidden;
                        text-overflow:ellipsis;
                        white-space:nowrap;
                        font-weight:bold;
                    }               
                }
            }
        }
    }
</style>


