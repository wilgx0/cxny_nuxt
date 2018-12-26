<template>
  <el-submenu :index="index + ''" :key="index">
    <template slot="title">{{title}}</template>
    <template v-for="v in data">
        <!-- 最后一级菜单 -->
        <el-menu-item v-if="notFolder(v.childlist)" :index="v.tpl_mobile" :key="v.id">
            <a  :href="v.tpl_mobile" @click.prevent><span>{{v.name}}</span></a>   
        </el-menu-item>
        <!-- 此菜单下还有子菜单 -->
        <item v-else :data='v.childlist'  :title="v.name" :index="v.tpl_mobile" :key="v.id"></item>
    </template>
  </el-submenu>
</template>
<script>
export default {
    name:'item',
    props:['data','title','index'],
    methods: {
        notFolder(v) {
            return Array.isArray(v) && v.length == 0;
        },
   
    },
    filters:{
      
    }
};
</script>
<style lang='less'>
 
</style>

