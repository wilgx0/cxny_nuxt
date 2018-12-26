<template>
    <div class='img-list'>
        <ul class='list'>
            <li v-for='(v,i) in list' :key='i' @click="showArticle(v.id)">
                <div class='left'>
                    <a :href="'/list/'+ cid + '/' + v.id" @click.prevent>
                        <img :src="v.img" alt="">
                    </a>
                </div> 
                <div class='right'>
                    <p>{{v.title}}</p>
                    <p>{{v.scontent}}</p>
                    <p>{{v.create_time | timestampToTime('Y-M-D') }}</p>
                </div>
            </li>
        </ul>
        <!-- 分页 -->
        <el-pagination
            background
            layout="prev, pager, next"
            :page-size="size"
            :total="total"
            @current-change="currentChange"
        >
        </el-pagination>
    </div>
</template>
<script>


import Tool from "~/assets/js/common.js"

export default {
    data(){
        return {
            
        }
    },
    methods:{
        currentChange(i){
            this.$emit('page-change',i);
        },
        showArticle(id){
            this.$emit('show-article',id);
        }
    },
    filters:{
        timestampToTime:Tool.timestampToTime
    },
    props:['list','size','total','cid']
}
</script>

<style lang='less'>
    .img-list{
        .el-pagination.is-background .el-pager li:not(.disabled).active {
            background-color:#22ac38;
        }
        .list {
            display:flex;
            margin:0;
            padding:0px;
            list-style: none;
            flex-wrap:wrap;
        }
        .list > li{
            cursor:pointer;
            margin-bottom:20px;
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
                    }               
                }
            }
        }
    }
</style>


