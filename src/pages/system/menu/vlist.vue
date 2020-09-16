<template>
  <div>
    <el-table :data="menulist" border row-key="id" style="width:100%;margin: 20px auto" :tree-props="{children: 'children'}">
      <el-table-column prop="id" label="ID" align="center"></el-table-column>
      <el-table-column prop="title" label="标题" align="center"></el-table-column>
      <el-table-column prop="type" label="类型" align="center"></el-table-column>
      <el-table-column prop="icon" label="图标" align="center"></el-table-column>
      <el-table-column prop="url" label="地址" align="center"></el-table-column>
      <el-table-column label="状态" align="center">
        <template slot-scope="scope">
          <el-button
            :type="scope.row.type==1?'success':'danger'"
            plain
          >{{scope.row.type==1?"已启用":"已禁用"}}</el-button>
        </template>
      </el-table-column>
      <el-table-column label="修改" align="center">
        <template slot-scope="scope">
          <el-button  type="primary" icon="el-icon-edit" @click="edit(scope.row)" circle></el-button>
          <el-button type="danger" icon="el-icon-delete" @click="delmsg(scope.row.id)" circle></el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { menuList, menuDel } from "../../../common/request/menu";
export default {
  data() {
    return {
      
    };
  },
  created() {},
  computed: {
    ...mapGetters({
      menulist: "menu/menulist",
    }),
  },
  mounted() {},
  methods: {
    ...mapActions({
      get_menu_list: "menu/get_menu_list",
    }),
    async delmsg(id) {
      this.$confirm("确认删除吗?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      }).then(async () => {
        let res = await menuDel(id);
        console.log(res);
        if (res.data.code == 200) {
          this.$message.success(res.data.msg);
          this.get_menu_list();
         
        } else {
          this.$message.error(res.data.msg);
        }
      });
    },
    edit(data){
      console.log({...data});
      this.$emit("edit",{...data})
    }
  },
  components: {},
};
</script>
<style scoped>
</style>