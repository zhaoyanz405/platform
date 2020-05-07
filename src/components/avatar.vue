<template>
  <el-dropdown trigger="click">
    <span class="el-dropdown-link">
      人生海海
      <i class="el-icon-arrow-down el-icon--right"></i>
    </span>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item icon="el-icon-user">个人中心</el-dropdown-item>
      <el-dropdown-item icon="el-icon-top-left" @click.native="logout()">退出</el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>
<style>
.el-dropdown-link {
  cursor: pointer;
  color: #409eff;
}
.el-icon-arrow-down {
  font-size: 12px;
}
.demonstration {
  display: block;
  color: #8492a6;
  font-size: 14px;
  margin-bottom: 20px;
}
</style>

<script>
export default {
  methods: {
    handleClick() {
      alert("button click");
    },
    logout() {
      console.log('logout')
      this.$router.push('login')
    }
  }
};
</script>
