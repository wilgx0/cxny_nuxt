<template>
    <div class='search' >
        <div class="search-box" >
            <input  type="text" v-model="searchText">
            <div class="search-botton" @click="actionSearch"></div>
        </div>  
    </div>
</template>

<script>
export default {
    data(){
        return{
            searchText:'',
        }
    },
    methods:{
        actionSearch(){
            this.$emit('action-search',this.searchText);
        }
    }
}
</script>

<style lang="less" scoped >
.search{
    display:flex;
    justify-content: flex-end;
    .search-box{
        display:flex;
        height:30px;
        input{
            box-sizing:border-box;
            height:30px;
            border: 1px solid #6ebc00;
        }
       .search-botton{
           cursor:pointer;
           background:url('../static/images/search.png') no-repeat center center;
           width: 55px;
           height: 30px;
           background-color:#6ebc00;
           display:block;
       }
    }
  
}
</style>


