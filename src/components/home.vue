<template>
  <div class="home">
      <div class="nav">
        <img src="../assets/logo1.jpg"  alt="">
        <router-link v-if="!isLogin" to="/login" class="login" tag="div">登录</router-link>
        <img v-if="isLogin" src="../assets/user.jpeg" alt="头像" style="float:right; border-radius:50%;">
        <span  style="float:right; line-height:80px;">{{userName}}</span>
      </div>
      <div class="content">
        <h2>vue-router-test</h2>
        <div class="my">
          <router-link to="/project" tag="span">我的项目</router-link>
          <router-link to="/doc" tag="span">我的文档</router-link>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'home',
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
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home{
  width: 1200px;
  margin: 0 auto;
}
.nav {
  height: 80px
}
.nav img{
  height: 80px;
}
.nav .login{
  font-size:14px;
  font-family: "微软雅黑";
  float: right;
  border-radius: 5px;
  padding: 5px 15px;
  background:#43e578;
  color: #ffffff;
  cursor: pointer;
  margin:25px 200px 0 0;
}
.content h2{
  font-size:50px;
  font-weight: normal;
  padding: 30px 0;
  text-align: center;
}
.content .my{
  text-align: center;
}
.content .my span{
  padding: 5px 10px;
  background:#43e578;
  margin-right: 10px;
  font-size: 14px;
  color: #333;
  border-radius: 14px;
  cursor: pointer;
}
</style>
