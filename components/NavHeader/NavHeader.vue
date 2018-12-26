<template>
<div class='nav-header'>
  <img src="../../static/images/logo.png" alt="成雄农业">
  <el-menu 
    :default-active="activeIndex" 
    mode="horizontal" 
    @select="handleSelect" 
    :router="true" 
    active-text-color="#22ac38">
    <template v-for="v in data">
      <!-- 最后一级菜单 -->
      <el-menu-item v-if="notFolder(v.childlist)"  :index="v.tpl_mobile" :key="v.id">
        <a  :href="v.tpl_mobile" @click.prevent><span>{{v.name}}</span></a>  
      </el-menu-item>
      <!-- 此菜单下还有子菜单 -->
      <item v-else :data='v.childlist' :title="v.name" :index="v.tpl_mobile" :key="v.id"></item>
    </template>
  </el-menu>
</div>

</template>

<script>
import Item from '~/components/NavHeader/Item.vue';
export default {
  props: ["data","activeIndex"],
  data() {
    return {};
  },
  methods: {
    notFolder(v) {
      return Array.isArray(v) && v.length == 0;
    },
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
      this.$router.push({path:key,query:{}});
    }
  },
  components:{
    Item
  },
  filters:{
   
  },
  mounted:function(){

  }

};
</script>

<style lang='less'>

.nav-header{
   display:flex;
    justify-content:space-between;
    align-items:center;
    & > img{
      height:37px;
      width:169px;
    }
}
.nav-header,.el-menu--horizontal{
  margin-bottom:3px;
  a{
    text-decoration:none;
    
  }
  .is-active > a{
    color:#22ac38 !important;
  }
  a:link {color: #909399}		/* 未访问的链接 */
  a:visited {color: #909399}	/* 已访问的链接 */
  a:hover {color: #909399}	/* 鼠标移动到链接上 */
  a:active {color: #909399}	/* 选定的链接 */
}
</style>


