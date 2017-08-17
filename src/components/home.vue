<template>
  <div class="home">
      <div class="nav">
        <img src="../assets/logo1.jpg"  alt="">
        <router-link to="/" class="login" tag="div">登录</router-link>
      </div>
      <div class="content">
        <h2>vue-router-test</h2>
        <div class="my">
          <span>我的项目</span>
          <span>我的文档</span>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {}
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
