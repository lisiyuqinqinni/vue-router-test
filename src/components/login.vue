<template>
  <div class="login">
      <div class="content">
        <form @submit.prevent='sendLogin' autocomplete="off">
          <div><input type="text" maxlength="12" ref="userName"></div>
          <div><input type="password" maxlength="6"></div>
          <div><input type="submit"></div>
        </form>
        <router-link to='/'>首页>>></router-link>
      </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
    }
  },
  methods: {
    sendLogin () {
      let userName = this.$refs.userName.value
      this.$local.save('lsy', {
        login: true,
        userName: userName
      })
      let redirect = this.$route.query.redirect

      if (!redirect) {
        redirect = 'project'
      }

      this.$router.push({
        path: '/' + redirect
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.login{
  width:1200px;
  margin: 0 auto;
}
.content{
  text-align: center;
}
</style>
