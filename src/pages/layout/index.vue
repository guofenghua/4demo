<template>
  <el-container class="page">
    <el-aside :width="iscollapse?'60px':'193px'" class="nav">
      <left/>
    </el-aside>
    <el-container class="contenter">
      <el-header height class="head">
        <header1/>
      </el-header>
      <el-main height class="main">
        <router-view class="a"></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>

import left from "@/components/left";
import header1 from "@/components/header";
import { mapState } from "vuex"
export default {
  data() {
    return {};
  },
  created() {},
  methods: {},
  components: {
    header1,left
  },
    computed:{
    ...mapState(['iscollapse'])
  }
};
</script>
<style scoped>

.page {
  width: 100vw;
  height: 100vh;
}
.nav{
    height:100%;
    background-color: rgb(84, 92, 100);
  
}
.contenter{
    height: 100%;
    background-color: #f7f7f7;
}
.head{
    background-color: #fff;
    height: 80px;
    box-shadow: 0 0 4px 0 rgba(0, 0, 0, .3);
}
</style>