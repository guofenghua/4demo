<template>
  <div>
    <el-button type="primary" @click="add">添加</el-button>
    <v-list @edit="edit"></v-list>
    <v-info :info="info" ref="xiugai"></v-info>
  </div>
</template>

<script>
import vList from "./vlist";
import vInfo from "./vinfo";
export default {
  data() {
    return {
      info: {
        isadd: false,
        isshow: false,
      },
    };
  },
  created() {},
  methods: {
    add() {
      this.info.isadd = this.info.isshow = true;
    },
    change() {
      this.info.isshow = false;
    },
    edit(data) {
      this.info.isadd = false;
      this.info.isshow = true;
      
      this.$refs.xiugai.setinfo(data);
    },
  },
  components: { vList, vInfo },
  computed: {},
};
</script>
<style>
.el-dialog__header {
  border-bottom: 1px solid #ddd;
}
.el-dialog__footer {
  text-align: center;
}
</style>