<template>
  <div class="table-bg">
      <el-table  :data="rolelist">
          <el-table-column prop="id" label="ID" align="center"></el-table-column>
          <el-table-column prop="rolename" label="角色名称" align="center"></el-table-column>
          <el-table-column label="状态">
              <template slot-scope="scope">
                  <el-tag type="success" v-if="scope.row.status==1">启用</el-tag>
                  <el-tag type="danger" v-if="scope.row.status==2">禁用</el-tag>
              </template>
          </el-table-column>
          <el-table-column label="修改">
                <template slot-scope="scope">
                    <el-button type="primary" size="small" @click="edit(scope.row)" circle icon="el-icon-edit"></el-button>
                    <el-button type="danger" size="small"  @click="del(scope.row.id)"  circle icon="el-icon-delete"></el-button>
                </template>
          </el-table-column>
      </el-table>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { delRole } from "../../../common/request/role";
export default {
  data() {
    return {
      
    };
  },
  created() {},
  computed: {
    ...mapGetters({
      rolelist: "role/rolelist",
    }),
  },
  mounted() {
    console.log(this.rolelist);
    if(!this.rolelist.length){
      this.get_role_list();
      console.log(this.get_role_list()); 
        }
  },
  methods: {
    ...mapActions({
      get_role_list: "role/get_role_list",
    }),

    async del(id) {
      this.$confirm("确认删除吗?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      }).then(async () => {
        let res = await delRole(id);
        console.log(res);
        if (res.data.code == 200) {
          this.$message.success(res.data.msg);
          this.get_role_list();
         
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