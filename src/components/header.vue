<template>
  <div class="top">

      <el-button @click="TOGGLE" type="primary" icon="el-icon-s-fold" size="small"></el-button>
      <!-- <el-button type="primary" icon="el-icon-s-unfold" size="small"></el-button> -->
      <el-breadcrumb separator-class="el-icon-arrow-right" class="mbx">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>{{$route.meta.title}}</el-breadcrumb-item>
 
      </el-breadcrumb>
      <el-button class="btn" icon="el-icon-back" v-if="$route.path!='/index'" @click="$router.back()" size="small" circle></el-button>
 
    <el-dropdown class="right" >
      <el-button type="primary">
        更多菜单
        <i class="el-icon-arrow-down el-icon--right"></i>
      </el-button>
      <el-dropdown-menu slot="dropdown" class="xl">
        <el-dropdown-item>黄金糕</el-dropdown-item>
        <el-dropdown-item>狮子头</el-dropdown-item>
        <el-dropdown-item>螺蛳粉</el-dropdown-item>
        <el-dropdown-item>双皮奶</el-dropdown-item>
        <el-dropdown-item>蚵仔煎</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
import { mapMutations } from "vuex"
export default {
  data() {
    return {};
  },
  created() {},
  methods: {

       ...mapMutations(['TOGGLE'])
  },
  components: {},
};
</script>
<style scoped>
.top {
  height: 80px;
  display: flex;
  align-items: center;
  position: relative;
  
}
.mbx {
  margin-left: 20px;
}

.btn{
  margin-left: 20px;
}
.right{
position:absolute;
right: 20px;
}
</style>