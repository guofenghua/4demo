<template>
  <div>
    <el-dialog title="角色名称" :visible.sync="info.isshow" width="30%">
      <el-form :model="forminfo" ref="form" :rules="rules" label-width="140px">
        <el-form-item label="角色名称" prop="rolename">
          <el-input v-model="forminfo.rolename" placeholder="请输入角色名称"></el-input>
        </el-form-item>
        <el-form-item label="角色权限">
          <el-tree
            default-expand-all
            node-key="id"
            ref="tree"
            :data="menulist"
            show-checkbox
            :props="{children:'children',label:'title'}"
            :check-strictly="checkStrictly"
          ></el-tree>
        </el-form-item>

        <el-form-item label="角色状态">
          <el-switch v-model="forminfo.status" :active-value="1" :inactive-value="2"></el-switch>
        </el-form-item>
        <el-form-item label>
          <el-button type="primary" @click="add">提交</el-button>
          <el-button type="warning" >重置</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
import { addRole, editRole } from "../../../common/request/role";
import { mapGetters, mapActions } from "vuex";
let defaultitem = {
  rolename: "",
  menus: "",
  status: 1,
};

let resetItem = { ...defaultitem };
export default {
  props: {
    info: {
      type: Object,
      default() {
        return {
          isadd: true,
          isshow: false,
        };
      },
    },
  },
  data() {
    return {
      forminfo: {...defaultitem},
      rules: {
        // 验证规则对象！
        rolename: [{ required: true, message: "必填！", trigger: "blur" }],
      },
      checkStrictly: false,
    };
  },
  mounted() {
    if (!this.menulist.length) {
      this.get_menu_list();
    }
  },
  created() {},
  methods: {
    ...mapActions({
      get_menu_list: "menu/get_menu_list",
      get_role_list: "role/get_role_list",
    }),
        setinfo(val) {
      // 将数据赋给默认defaultItem; 赋给表单
      // 将权限节点，回显到树中去！
      let idarr = val.menus.split(",");
      if (idarr[0]) {
        this.checkStrictly = true; // 父子互不关联！
        // 等到节点渲染完成再做某个事情！ this.$nextTick(()=>{  等到vue把节点渲染完成再做某些事情！ })
        this.$nextTick(() => {
          this.$refs.tree.setCheckedKeys(idarr);
          this.checkStrictly = false; // 又要父子互相关联！
        });
      }
      defaultitem = { ...val };
      this.forminfo = { ...val };
    },
    add(){
      let treelist = this.$refs.tree.getCheckedKeys().concat(this.$refs.tree.getHalfCheckedKeys());
      // console.log(this.$refs.tree.getCheckedKeys());
      // console.log(this.$refs.tree.getHalfCheckedKeys());
      if(treelist.length){
        this.forminfo.menus = treelist;
      }else{
         this.$message.warning("请选择权限");
        return;
      }
       this.$refs.form.validate(async (valid)=>{
         if(valid){
           let res;
           
           res = await addRole(this.forminfo);
          console.log(res);
       if(res.data.code==200){
        console.log("通過");
        this.$message.success(res.data.msg);
      this.info.isshow = false;
       this.get_role_list();
       this.cancel();
  
    }
         }
       })
    },
        cancel() {
      this.$refs.tree.setCheckedKeys([]);
      this.forminfo = { ...resetItem };
    },
  },
  components: {},
  computed: {
    ...mapGetters({
      menulist: "menu/menulist",
    }),
  },
};
</script>
<style scoped>
#skdfj {
  text-align: center;
}
</style>