<template>
  <div class="header">
    <router-link to="/">
      <img src="../assets/logo1.jpg" alt="">
    </router-link>
    <ul>
      <router-link to="/workbench" tag="li">工作台</router-link>
      <router-link to="/project" tag="li">我的项目</router-link>
      <router-link to="/doc" tag="li">文档</router-link>
    </ul>
    <div class="user">
      <span @click="loginOut" v-if="isLogin">登出</span>
      <router-link to="/login" tag="span" v-if="!isLogin">登录</router-link>
    </div>
    <div class="user-info">
      <img v-if="isLogin" src="../assets/user.jpeg" alt="头像" style="float:right; border-radius:50%;">
      <span  style="float:right; line-height:100px; color:#fff; font-size:14px;">{{userName}}</span>
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'header',
  data () {
    return {
      userName: '',
      isLogin: false
    }
  },
  created () {
    let info = this.$local.fetch('lsy')
    this.userName = info.userName
    this.isLogin = info.login
  },
  methods: {
    loginOut () {
      this.$local.save('lsy', null)
      this.$router.push('/login')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
body{
  margin: 0;
  padding: 0;
}
.header{
  height:100px;
  width: 100%;
  background:#333;
}
.header img{
  height: 100px;
  float: left;
}
.header ul {
  float: left;
  margin: 0;
  padding: 0;
}
.header ul li {
  float: left;
  list-style-type: none;
  line-height: 100px;
  font-size: 16px;
  color: #fff;
  font-family: "微软雅黑";
  padding: 0 20px;
  cursor: pointer;
}
.user {
  float: right;
  line-height: 100px;
  color: #fff;
  font-size: "SimSun";
  cursor: pointer;
  padding: 0 30px;
}
.user span {
  padding: 5px 10px;
  border-radius: 5px;
  background: #23f;
}
</style>
