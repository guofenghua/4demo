<template>
  <div>
    <el-dialog :title="info.isadd?'添加':'修改'" :visible.sync="info.ishow" width="30%">
      <el-form :model="list" ref="form" label-width="80px">
        <el-form-item label="类型">
          <el-radio-group v-model="list.type">
            <el-radio :label="1">目录</el-radio>
            <el-radio :label="2">菜单</el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item v-if="list.type==2" label="上级目录">
          <el-select v-model="list.pid" placeholder="请选择">
            <el-option label="顶级目录" :value="0"></el-option>
            <el-option
              v-for="item in menulist"
              v-if="item.type==1"
              :key="item.id"
              :label="item.title"
              :value="item.id"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item :label="list.type==1?'目錄名稱':'菜單名稱'">
          <el-input v-model="list.title"></el-input>
        </el-form-item>

        <el-form-item v-if="list.type=='1'" label="图标">
          <el-input v-model="list.icon"></el-input>
        </el-form-item>

        <el-form-item v-if="list.type=='2'" label="菜单地址">
          <el-input v-model="list.url"></el-input>
        </el-form-item>
        <el-form-item :active-value="1" label="状态">
          <el-radio v-model="list.status" :label="1">正常</el-radio>
          <el-radio v-model="list.status" :label="2">禁用</el-radio>
        </el-form-item>
      </el-form>

      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="sumbit">确 定</el-button>
        <el-button @click="info.ishow = false">取 消</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { menuList, menuAdd ,menuEdit} from "../../../common/request/menu";
import { mapGetters, mapActions } from "vuex";
let defaultitem = {
  pid: 0,
  title: "",
  icon: "",
  type: 1, // 1目录2菜单
  url: "",
  status: 1,
};
export default {
  props: {
    info: {
      type: Object,
      default() {
        return {
          isadd: true,
          ishow: false,
        };
      },
    },
  },
  data() {
    return {
      list: { ...defaultitem },
      data:{},
    };
  },
  mounted() {
    if (!this.list.length) {
      this.get_menu_list();
    }
  },
  created() {},
  methods: {
    ...mapActions({
      get_menu_list: "menu/get_menu_list",
    }),
    async sumbit() {
      let res;
      console.log(this.info.isadd);
      if(this.info.isadd){
      res = await menuAdd(this.list);
      console.log("这是添加");
      }else{
      res =  await menuEdit({...this.data})
      console.log("这是修改");
      }
      if(res.data.code==200){
        this.$message.success(res.data.msg)
        this.get_menu_list();
      this.list = {...defaultitem}
      this.isShow = false;
      this.$emit("close");
      }else{
         this.$message.error(res.data.msg)
      }
      
    },
   async setinfo(data){
      console.log(data);
      this.list=data;
      this.data =data;
      console.log(this.data);
      


    }
  },
  components: {},
  computed: {
    ...mapGetters({
      menulist:"menu/menulist"
    })
  },
};
</script>
<style scoped>
#skdfj {
  text-align: center;
}
</style>