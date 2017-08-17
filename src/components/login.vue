<template>
  <div class="login">
      <div class="content">
        <form>
          <div><input type="text" maxlength="12"></div>
          <div><input type="password" maxlength="6"></div>
          <div><input type="submit"></div>
        </form>
      </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
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
