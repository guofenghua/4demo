<template>
  <div>
    <h3>小U商城管理系统</h3>
    <div>
 

    <el-menu 
        class="page-menu"
        background-color="#444" 
        text-color="#fff" 
        router 
        :default-active="$route.path"
        :collapse="iscollapse"
      >
        <el-menu-item index="/index"> <i class="el-icon-house"></i> <span slot="title">后台首页</span></el-menu-item>
        <el-submenu index="2">
          <template slot="title"><i class="el-icon-setting"></i><span slot="title">系统设置</span></template>
          <el-menu-item index="/system">菜单管理</el-menu-item>
          <el-menu-item index="/role">角色管理</el-menu-item>
          <el-menu-item index="/user">管理员管理</el-menu-item>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title"><i class="el-icon-goods"></i><span slot="title">商城管理</span></template>
          <el-menu-item index="3-1">分类管理</el-menu-item>
          <el-menu-item index="3-2">规格管理</el-menu-item>
          <el-menu-item index="3-3">商品管理</el-menu-item>

        </el-submenu>
  
      </el-menu>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex"
export default {
  data() {
    return {
    
    };
  },
  created() {},
  methods: {},
  components: {},
  computed:{
    ...mapState(['iscollapse'])
  }
};
</script>
<style scoped>
h3 {
  height: 80px;
  line-height: 80px;
  text-align: center;
  color: #fff;
}
</style>