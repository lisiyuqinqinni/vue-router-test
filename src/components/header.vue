<template>
  <div class="header">
    <router-link to="/">
      <img src="../assets/logo1.jpg" alt="">
    </router-link>
    <ul>
      <li>工作台</li>
      <li>我的项目</li>
      <li>文档</li>
    </ul>
    <div class="user">
      <span @click="loginOut">登出</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'header',
  data () {
    return {
    }
  },
  created () {
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
  padding-right: 45px;
}
.user span {
  padding: 5px 10px;
  border-radius: 5px;
  background: #23f;
}
</style>
