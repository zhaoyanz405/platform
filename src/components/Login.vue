<template>
  <div id="login_form">
    <div style="margin: 20px;"></div>
    <img src="@/assets/logo.png" />
    <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
      <el-form-item>
        <el-input v-model="formLabelAlign.username" placeholder="手机/邮箱/用户名"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input v-model="formLabelAlign.password" placeholder="密码"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button @click="register()">注册</el-button>
        <el-button type="primary" @click="login()">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      labelPosition: "top",
      formLabelAlign: {
        username: "",
        password: ""
      }
    };
  },
  methods: {
    login() {
      console.log('login')
    },
    register() {
      console.log('register')
    }
  }
};
</script>
<style scoped>
#login_form {
  width: 400px;
}

#login_form img {
  height: 50%;
  width: 50%;
}
</style>