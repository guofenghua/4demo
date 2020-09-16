<template>
  <div class="bd">
    <el-row class="dl">
      <el-col :span="14">
        <h3>小U商城管理系统</h3>

        <el-form label-position="left" :model="forminfo">
          <el-input placeholder="请输入用户名" v-model="forminfo.username">
            <template slot="prepend">
              <i class="el-icon-user-solid"></i>
            </template>
          </el-input>
            <el-input placeholder="请输入密码" v-model="forminfo.password" class="password" show-password>
            <template slot="prepend">
              <i class="el-icon-lock"></i>
            </template>
          </el-input>
        </el-form>
         <el-button type="primary" class="login-btn">登录</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      forminfo: {
        username: "",
        password: "",
      },
    };
  },
  created() {},
  methods: {},
  components: {},
};
</script>
<style scoped>
.bd {
  width: 100%;
  height: 100vh;
  background-color: cadetblue;
}
.dl {
  width: 500px;
  height: 300px;
  border-radius: 10px;
  background-color: #fff;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  display: flex;
  justify-content: center;
}
.dl h3 {
  line-height: 40px;
  text-align: center;
  margin: 20px 0;
}
.password{
    margin-top: 20px;
}
.login-btn{
    display: block;
    width: 100%;
    margin-top: 20px;
}
</style>